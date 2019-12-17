
var express = require('express');

var Plano = require('.././models/planoModel');
var planosController = require('../controllers/planosController')(Plano);

var planosRouter = express.Router();

planosRouter.route('')
    .get(planosController.get)
    .post(planosController.add);

planosRouter.route('/:id')    
   .get(planosController.getById)
   .put(planosController.update)
   .delete(planosController.del);

module.exports = planosRouter;    