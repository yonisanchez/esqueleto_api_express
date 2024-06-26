const getPlaces = (req, res) => {
  res.send('Recuepramos todos los palces');
};

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
