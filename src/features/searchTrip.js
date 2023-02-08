const inquirer = require('inquirer')

class SearchTrip{
    constructor(){
        this.citiesSearch = this.listTrips()
    }
    async listTrips(){
        const answer = await inquirer
        .prompt({
            message: "Enter city?",
            type: "input",
            name: "trips",
        });
        console.log(answer.trips)
    return answer.trips;
     }
}

module.exports = SearchTrip