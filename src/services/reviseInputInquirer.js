const chalk = require('chalk')
const InputPrompt = require('inquirer/lib/prompts/input')
const isFunction = require('lodash.isfunction')
const partialRight = require('lodash.partialright')
const { findTrips } = require('./listTrips')

const identity = i => i

class SearchInputPrompt extends InputPrompt {
    constructor(...args) {
        super(...args)

        if (!this.opt.maxLength) {
            this.throwParamError('maxLength')
        }
        this.opt.validate = this.createValidator(this.opt.validate);
        this.opt.viatgesTrobats = [];
        this.opt.viatgesMostrar = "";
    }

    measureInput(input) {
        const { filter } = this.opt;
        return filter(input, this.answers)
    }

    render(error) {
        const { maxLength, transformer } = this.opt
        const answered = this.status === 'answered'

        if (this.status === 'pending') {
            const textIntroduit = this.rl.line;
            this.opt.viatgesTrobats = findTrips(textIntroduit, this.opt.existingTrips);
            this.opt.viatgesMostrar = '';
            //console.log(this.opt.viatgesTrobats)
            for (let i = 1; i < this.opt.viatgesTrobats.length + 1; i++) {
                if (this.opt.viatgesTrobats[i - 1] === true) {
                    this.opt.viatgesMostrar += `${this.opt.existingTrips[1][i]} \n`
                }
            }
        }
        const transform = partialRight(
            isFunction(transformer) ? transformer : identity,
            this.answers
        )

        let bottomContent = ''
        let message = this.getQuestion()
        const { length } = this.measureInput(this.rl.line)

        if (answered) {
            message += chalk.cyan(this.answer)
        } else {
            message += transform(this.rl.line)
        }

        if (error) {
            bottomContent = chalk.red('>> ') + error
        } else if (!answered) {
            const percent = length / maxLength * 100
            const color = percent < 80 ? chalk.green : percent > 100 ? chalk.red : chalk.yellow

            bottomContent = `${this.opt.viatgesMostrar}
            `
            // ${this.opt.viatgesTrobats}
            // (${color(length)}/${this.opt.maxLength} characters)
        }

        this.screen.render(message, bottomContent)
    }

    createValidator(validate) {
        const { filter, maxLength } = this.opt

        return (...args) => {
            const [input, answers] = args
            const didInput =
                (input && !filter) || (input && filter('', answers) !== input)

            const { length } = input

            if (length > maxLength) {
                this.rl.line = this.rl.history[0]
                this.rl.cursor = this.rl.line.length
                return this.constructor.VALIDATION_FIND
            }

            return validate(...args, didInput ? this.rl.history[0] : '')
        }
    }
}

SearchInputPrompt.VALIDATION_FIND =
    'Input has find some trips!'

module.exports = SearchInputPrompt