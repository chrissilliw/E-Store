const express = require('express');
const { getMobilesController, getMobileByIdController } = require('../controllers/mobileControllers.js');

const mobilesRouter = express.Router();

mobilesRouter.get('/', getMobilesController);
mobilesRouter.get('/:id', getMobileByIdController);

module.exports = { mobilesRouter };
