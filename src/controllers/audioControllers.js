const express = require('express');
const {
    getAudios,
    getAudioById, 
    createAudio,
    updateAudio,
    deleteAudio
} = require('../services/audioService');

// Get all Audio devices
const getAudiosController = async (req, res) => {
    try {
        let audios = await getAudios();
        if (audios.length === 0) {
            res.status(404).send('No Audio devices in stock.');
        } else {
            res.json(audios);
        }
    }
    catch (error) {
        console.error('Error fetching audio devices:', error)
        res.status(500).send(`Error fetching audio devices: ${error.message}`);
    }
}

// Get a single Audio device
const getAudioByIdController = async (req, res) => {

    const id = parseInt(req.params.id);
    try {
        let audio = await getAudioById(id)
        if(audio === null) {
            res.status(404).send('No audio device found.');
        } else {
            console.log(audio);
            res.send(audio);
        }
    }
    catch (error) {
        console.error('Error feching audio device:', error)
        res.status(500).send(`Error fetching audio devices: ${error.message}`);
    }
}

// Create an Audio device
const createAudioController = async(req, res) => {
    const newAudio = {
        data: {
            attributes: {
                name : req.body.name,
                description : req.body.description,
                effect : req.body.effect,
                price : req.body.price,
                manufacturer : req.body.manufacturer
            }
        }
    }; 
    const createdAudio = await createAudio(newAudio);

    res.send(createdAudio);
    console.log(req.body);
}

// Update an Audio device
const updateAudioController = async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedAudioData = req.body;
    
    try {
        let existingAudio = await getAudioById(id);

        if (!existingAudio) {
            return res.status(404).send('Audio device not found');
        }

        if (existingAudio) {
            existingAudio = { ...existingAudio, ...updatedAudioData };
            const updatedAudio = await updateAudio(id, existingAudio);

            res.json(updatedAudio);
        }

    } catch (error) {
        console.error('Error updating audio device: ', error);
        res.status(500).send(`Error updating audio device:  ${error.message}`);
    }
}

// Delete a audio device
const deleteAudioController = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await deleteAudio(id);
        res.status(200).send(`Audio device with id ${id} was deleted successfully`);
    } catch (error) {
        console.error('Error trying to delete audio device: ', error);
        res.status(404).send(`Error trying to delete audio device: ${error.message}`);
    }
}

module.exports = {
    getAudiosController,
    getAudioByIdController,
    createAudioController,
    updateAudioController,
    deleteAudioController
}