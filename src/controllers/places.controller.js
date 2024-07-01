const PlacesModel = require('../models/places.models');

const getPlaces = async (req, res) => {
  try {
    const { rows: places } = await PlacesModel.getAll();
    res.json(places);
  } catch (err) {
    res.status(500).send('No se puede mostrar places');
  }
};

// si cambiamos res.send por res.json lo que obtenemos es un json
const createPlace = async (req, res) => {
  try {
    const result = await PlacesModel.createPlace(req.body);
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
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
