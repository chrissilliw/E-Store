const express = require('express');
const {
    getAudiosController,
    getAudioByIdController,
    createAudioController,
    updateAudioController,
    deleteAudioController
} = require('../controllers/audioController');

audiosRouter.get('/', getAudiosController);
audiosRouter.get('/:id', getAudioByIdController);
audiosRouter.post('/new', createAudioController);
audiosRouter.put('/new', updateAudioController);
audiosRouter.delete('/new', deleteAudioController);

module.exports = { audiosRouter};