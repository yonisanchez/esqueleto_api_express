const express = require('express');
const cors = require('cors');

const app = express();

//Config App Express
app.use(cors());
app.use(express.json());

// /api/places
app.use('/api', require('./routes/api')); // delegar la gestion de la petición de esas rutas al fichero

module.exports = app;
