const express = require('express');
const { getComputersController, getComputerByIdController, createComputerController } = require('../controllers/computerControllers.js');

const computersRouter = express.Router();

computersRouter.get('/new', createComputerController);
computersRouter.get('/:id', getComputerByIdController);
computersRouter.get('/', getComputersController);

module.exports = { computersRouter };
