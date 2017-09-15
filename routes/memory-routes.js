const express = require('express');

const memoryRoutes = express.Router();
const memoryController = require('../controllers/memories-controller');

memoryRoutes.post('/add', memoryController.create);


module.exports = memoryRoutes;