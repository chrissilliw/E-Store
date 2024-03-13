const express = require('express');
const { getComputersController, getComputerByIdController, createComputerController, updateComputerController, deleteComputerController } = require('../controllers/computerControllers.js');

const computersRouter = express.Router();

computersRouter.get('/', getComputersController);
computersRouter.get('/:id', getComputerByIdController);
computersRouter.post('/new', createComputerController);
computersRouter.put('/update/:id', updateComputerController);
computersRouter.put('/delete/:id', deleteComputerController);

module.exports = { computersRouter };
