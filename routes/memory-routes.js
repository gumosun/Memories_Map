const express = require('express');

const memoryRoutes = express.Router();
const memoryController = require('../controllers/memories-controller');

memoryRoutes.get('/all', memoryController.index);
memoryRoutes.get('/all/:id', memoryController.show);
memoryRoutes.post('/add', memoryController.create);
memoryRoutes.get('/all/:id/comment', memoryController.getComment);
memoryRoutes.post('/all/:id/comment', memoryController.addComment);
memoryRoutes.delete('/all/:id', memoryController.delete)
memoryRoutes.put('all/:id', memoryController.update)

module.exports = memoryRoutes;