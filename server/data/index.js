const { parse } = require('csv-parse')  // {} if we don't use this, this program doesn't work well this line will throw an error parse is not a funciton because the parse is stored as object. so we use the {} the curly praces to require the parse funciton from the object. 
console.log('parse type', typeof parse);
console.log(parse);

const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanets(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet[`koi_insol`] > 0.36 && planet[`koi_insol`] < 1.11
        && planet['koi_prad'] < 1.6;
}
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        if (isHabitablePlanets(data)) {
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(habitablePlanets.map((planet) => {
            return planet[`kepler_name`];
        }))

        //console.log(`${habaitablePlanets.length} habitable planets founds!`)
        console.log(`DONE`);  // the results will prints the the buffers of array as an output.  
    })

// console.log(habitablePlanets)

console.log(habitablePlanets)  // this will prrint the empty array. 

module.exports = {
    planets: habitablePlanets
}

/* This file is not needed to this project */
