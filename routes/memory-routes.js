const express = require('express');

const memoryRoutes = express.Router();
const memoryController = require('../controllers/memories-controller');

memoryRoutes.get('/all', memoryController.index);
memoryRoutes.get('/all/:id', memoryController.show);
memoryRoutes.post('/add', memoryController.create);


module.exports = memoryRoutes;