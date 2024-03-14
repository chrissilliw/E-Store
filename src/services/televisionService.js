const axios = require('axios');

const BASE_URL = "http://localhost:1337/api";

// Get all Televisions
const getTelevisions = async () => {
    try {
        let response = await axios.get(`${BASE_URL}/televisions`);
        return response.data.data;
    }
    catch (error) {
        console.error('Error fetching data from Strapi: ', error);
        resizeBy.status(500).send('Internet Server Error');
    }
};

// Get a single Television
const getTelevisionById = async (id) => {
    try {
        let response = await axios.get(`${BASE_URL}/televisions/${id}`);
        return response.data.data;
    }
    catch (error) {
        console.error('Error fetching Television data from Strapi: ', error);
    }
}

// Create a Television
const createTelevision = (newTelevision) => {
    try {
        let response = axios.post(`${BASE_URL}/televisions/`, newTelevision);
        return response.data;
    } 
    catch (error) {
        console.error('Error sending television data to Strapi: ', error);
    }
}

//Update a Television
const updateTelevision = async (id, updatedTelevision) => {
    try {
        let response = await axios.put(`${BASE_URL}/televisions/${id}`, updatedTelevision);
        return response.data;
    }
    catch (error) {
        console.error('Error truing to delete televisoin data from Strapi: ', error);
    }
}

// Delete a Television
const deleteTelevision = async (id) => {
    try {
        let response = await axios.delete(`${BASE_URL}/televisions/${id}`);
        return response.data;
    }
    catch (error) {
        console.error('Error trying to delete television data from Strapi: ', error);
    }
}
module.exports = { getTelevisions, getTelevisionById, createTelevision, updateTelevision, deleteTelevision };