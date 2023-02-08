const fs = require("fs/promises");
const path = require("path");

const csvToJson = async ()=>{

    try {
        let csvFileName = 'mockTrips.csv';
        let csvFile = await fs.readFile(
            path.join(__dirname, "..", "..", "__tests__", csvFileName),
            { encoding: "utf8" }
        );
        let jsonFile = { data: [] };
        let particioEnter = csvFile.split(/\r?\n/);
        //console.log(particioEnter)
        //llegir primera linea fins a enter per coneixer les propietats del objecte
        let properties = [];
        properties = particioEnter[0].split(";");
        //legir cada una de les linies fins a enter per donar valor a les propietats
        for (let i = 1; i < particioEnter.length; i++) {
            let valors = particioEnter[i].split(";");
            let obj = {};
            for (let j = 0; j < valors.length; j++) {
                if (isNaN(valors[j])) {
                    obj[properties[j]] = valors[j];
                } else {
                    obj[properties[j]] = +valors[j];

                }
            }
            jsonFile.data.push(obj);
        }
       await fs.writeFile(  path.join(__dirname, "..", "..", "__tests__", 'mockTrips.json'),JSON.stringify(jsonFile))
        return [jsonFile,particioEnter]
    } catch (error) {
        console.log(error)
    }

}

module.exports = {csvToJson}