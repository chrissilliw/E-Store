const express = require('express');
const {
    getAudiosController,
    getAudioByIdController,
    createAudioController,
    updateAudioController,
    deleteAudioController
} = require('../controllers/audioControllers');

const audiosRouter = express.Router();

audiosRouter.get('/', getAudiosController);
audiosRouter.get('/:id', getAudioByIdController);
audiosRouter.post('/new', createAudioController);
audiosRouter.put('/update/:id', updateAudioController);
audiosRouter.delete('/delete/:id', deleteAudioController);

module.exports = { audiosRouter };