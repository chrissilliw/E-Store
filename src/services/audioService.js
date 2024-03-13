const axios = require('axios');
require('../models/AudioModel');

const BASE_URL = "http://localhost:1337/api";

// Get all Audio devices
const getAudios = async () => {
    try {
        let response = await axios.get(`${BASE_URL}/audio-devices`);
        return response.data.dataa;
    }
    catch (error) {
        console.error('Error fetching data from Strapi: ', error);
        res.status(500).send('Internet Server Error');
    }
};

// Get a single Audio device
const getAudioById = async (id)  => {
    try {
        let response = await axios.get(`${BASE_URL}/audio-devices/${id}`);
        return response.data.data;
    }
    catch (error) {
        console.error('Error fetching data from Strapi: ', error);
    }
}

// Create a audio-device
const createAudio = (newAudio) => {
    try {
        let response = axios.post(`${BASE_URL}/audio-devices`, newAudio);
        return response.data;
    }
    catch (error) {
        console.error('Error sending audio device data to Strapi: ', error);
    }
}

// Update a Audio device
const updateAudio = async (id, updatedAudio) => {
    try {
        let response = await axios.put(`${BASE_URL}/audio-devices/${id}`, updatedAudio);
        return response.data;
    }
    catch (error) {
        console.error('Error trying to update audio device data to Strapi: ', error);
    }
}

//Delete a Audio device
const deleteAudio = async (id) => {
    try {
        let response = await axios.delete(`${BASE_URL}/audio-devices/${id}`);
        return response.data;
    }
    catch (error) {
        console.error('Error trying to delete audio device data from Strapi: ', error);
    }
}

module.exports = { 
    getAudios,
    getAudioById,
    createAudio,
    deleteAudio,
    updateAudio
};