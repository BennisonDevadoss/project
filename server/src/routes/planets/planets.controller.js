"use strict";
const { planets } = require('../../models/planets.model')
console.log("planets is", planets)
function getAllPlanets(req, res) {
    console.log("planets", planets)
    return res.status(200).send(planets);  /* return is not mantatry because the once the res.send is executed then the corresponding API connection is closed  */
}

module.exports = {
    getAllPlanets,
}
