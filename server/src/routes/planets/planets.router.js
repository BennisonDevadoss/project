const express = require('express');

const { getAllPlanets
} = require('./planets.controller')

const planetsRouter = express.Router();
// console.log("type of planetsRoutes is", typeof planetsRouter)

planetsRouter.get('/planets', getAllPlanets);

module.exports = { planetsRouter }
