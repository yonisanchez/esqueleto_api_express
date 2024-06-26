const router = require('express').Router();
const PlacesController = require('../../controllers/places.controller');

router.get('/', PlacesController.getPlaces);

router.post('/', PlacesController.createPlace);

router.put('/', PlacesController.updatePlace);

router.delete('/', PlacesController.deletePlace);

module.exports = router;
