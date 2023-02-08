
const findTrips = (textIntroduit,existingTrips) => {
    let indextrips = []
    if(textIntroduit.length >=3){
        existingTrips[0]['data'].filter(element => {
            let found = element.cities.includes(textIntroduit);
            if (found != -1) {
                indextrips.push(found);
            }
        })
    } else {
        indextrips =[]
    }
    return indextrips
}

module.exports = { findTrips }