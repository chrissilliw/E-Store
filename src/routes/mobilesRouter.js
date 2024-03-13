const express = require('express');
const { getMobilesController, getMobileByIdController, createMobileController, updateMobileController, deleteMobileController } = require('../controllers/mobileControllers.js');

const mobilesRouter = express.Router();

mobilesRouter.get('/', getMobilesController);
mobilesRouter.get('/:id', getMobileByIdController);
mobilesRouter.post('/new', createMobileController);
mobilesRouter.put('/update/:id', updateMobileController);
mobilesRouter.delete('/delete/:id', deleteMobileController
);

module.exports = { mobilesRouter };
