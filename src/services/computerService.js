const axios = require('axios');
require('../models/ComputerModel')

const BASE_URL = "http://localhost:1337/api";

// Get all Computers
const getComputers = async () => {
    try {
        let response = await axios.get(`${BASE_URL}/computers`);
        return response.data.data;
    } 
    catch (error) {
        console.error('Error fetching Computer data from Strapi: ', error);
        res.status(500).send('Internet Server Error');
    }
};

// Get a single Computer
const getComputerById = async (id) => {
    try {
        let response = await axios.get(`${BASE_URL}/computers/${id}`);
        return response.data.data;

    }
    catch (error) {
        console.error('Error fetching Computer data from Strapi: ', error);
    }
}

// Create a computer
const createComputer = (newComputer) => {
    try {
        let response = axios.post(`${BASE_URL}/computers`, newComputer);
        return response.data;
    } catch (error) {
        console.error('Error sending computer data to Strapi: ', error);
    }
}

// Update a computer 
const updateComputer = async (id, updatedComputer) => {
    try {
        let response = await axios.put(`${BASE_URL}/computers/${id}`, updatedComputer);
        return response.data;
    } catch (error) {
        console.error('Error trying to update computer data to Strapi: ', error);
    }
}

// Delete a computer
const deleteComputer = async (id) => {
    try {
        let response = await axios.delete(`${BASE_URL}/computers/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error trying to delete computer data from Strapi: ', error);
    }
}

module.exports = { getComputers, getComputerById, createComputer, deleteComputer, updateComputer };