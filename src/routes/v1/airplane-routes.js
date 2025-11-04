const express = require('express');
 
  const { AirplaneController } = require('../../controllers');
 const { AirplaneMiddlewares}=require('../../middlewares')
 
  const router = express.Router();

  // POST /api/v1/airplanes    POST
  router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

  // POST /api/v1/airplanes    GET
  router.get('/',
    AirplaneController.getAirplanes);
   
  // POST /api/v1/airplanes:id GET
  router.get('/:id',
    AirplaneController.getAirplane);

    // POST /api/v1/airplanes:id DELETE
  router.delete('/:id',
    AirplaneController.destroyAirplane);
  
    module.exports = router;
