const express = require('express');
const { 
    getTelevisionsController, 
    getTelevisionByIdController, 
    createTelevisionController,
    updateTelevisionController,
    deleteTelevisionController
} = require('../controllers/televisionController');

const televisionsRouter = express.Router();

televisionsRouter.get('/', getTelevisionsController);
televisionsRouter.get('/:id', getTelevisionByIdController);
televisionsRouter.post('/new', createTelevisionController);
televisionsRouter.post('/update/:id', updateTelevisionController);
televisionsRouter.delete('/delete/:id', deleteTelevisionController);

module.exports = { televisionsRouter };