
const SearchTrip = require('./src/features/searchTrip');
const csvToJson = require('./src/services/csvToJson');

//const searchTrip = new SearchTrip;
(async () => {
    return console.log(await csvToJson);
})();