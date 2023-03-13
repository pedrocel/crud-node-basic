const express = require('express')

const router = express.Router();

const graduationsController = require('./controllers/graduationsController');
const graduationsMiddleware = require('./middlewares/graduationMiddleware')

router.get('/graduations', graduationsController.getAll);

router.post('/graduation', graduationsMiddleware.validateGraduationFields, graduationsController.postCreate);

router.put('/graduation/:id', graduationsMiddleware.validateGraduationFields, graduationsController.putUpdate)

router.delete('/graduation/:id', graduationsController.deleteGraduation);

module.exports = router;