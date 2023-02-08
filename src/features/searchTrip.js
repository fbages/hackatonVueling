const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const SearchInputPrompt = require('../services/reviseInputInquirer')

inquirer.registerPrompt('maxlength-input', SearchInputPrompt)

class SearchTrip {
    constructor(data) {
        this.existingtrips = data
        this.citiesSearch = this.listTrips(this.existingtrips);
    }
    async listTrips(data) {
        console.log('****************** Vueling Hackaton *******************')
        inquirer.prompt([
            {
                type: 'maxlength-input',
                message: "Where do you want to travel? (introduce at least 3 letters)",
                name: "trips",
                maxLength: 3,
                existingTrips: data
            }
        ]).then(
            console.log
        )
    }
}

module.exports = SearchTrip