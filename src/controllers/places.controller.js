const getPlaces = (req, res) => {
  res.json('Recuepramos todos los palces');
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
