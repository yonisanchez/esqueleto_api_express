const db = require('../config/db');

const getPlaces = async (req, res) => {
  try {
    const query = await db.query('select * from places');
    res.send(query.rows);
  } catch (err) {
    console.log(err);
  }
};
// si cambiamos res.send por res.json lo que obtenemos es un json
const createPlace = (req, res) => {
  res.send('Creamos un nuevo place');
};

const updatePlace = (req, res) => {
  res.send('Actualizamos un place');
};

const deletePlace = (req, res) => {
  res.send('Eliminamos un place');
};

module.exports = {
  getPlaces,
  createPlace,
  updatePlace,
  deletePlace
};
