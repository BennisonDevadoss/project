const express = require('express');
const cors = require('cors');
const { planetsRouter } = require('./routes/planets/planets.router');

// const { } planetsRouter }= require('./routes/planets/planets.router')
// const planetsrouter = require('./routes/planets/planets.controller')
const app = express();  // Express is also an middleware function

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(planetsRouter)

// console.log(app);
module.exports = {
    app
}
