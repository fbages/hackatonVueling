
const SearchTrip = require('./src/features/searchTrip');
const {csvToJson} = require('./src/services/csvToJson');


(async () => {
    let data = await csvToJson();
    const searchTrip = new SearchTrip(data);
})(); 