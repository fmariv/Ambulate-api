const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport')

const { RouteService, FormService } = require('../core/Geometry/geom-controller.js');
const { StatService } = require('../core/Statistics/stats-controller.js');

const routes = new RouteService()
const forms = new FormService()
const stats = new StatService()


// Get geometries and data
router.get('/pedestrians/:pedestrian_id/routes', routes.get)
router.get('/pedestrians/:pedestrian_id/forms', forms.get)
// Post geometries and data
router.post('/pedestrians/:pedestrian_id/routes', bodyParser.json(), routes.post)
// Authentication
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({"User": "HOLA"})
})
// Get statistics
router.get('/pedestrians/:pedestrian_id/stats-recount', stats.recount)
router.get('/pedestrians/:pedestrian_id/distance', stats.distance)

module.exports = router;