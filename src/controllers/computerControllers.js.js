const express = require('express');
const { getComputers, getComputerById, createComputer, deleteComputer }  = require('../services/computerService');
const { ComputerModel } = require('../models/ComputerModel');

// Get all Computers
const getComputersController = async (req, res) => {
    try {
        let computers = await getComputers();
        if (computers.length === 0 ) {
            res.status(404).send('No computers in stock.');
        } else {
        res.json(computers);
   }

    }
    catch (error) {
        console.error('Error fetching computers,', error)
        res.status(500).send(`Error fetching computers: ${error.message}`);
    }
};

// Get a single Computer
const getComputerByIdController = async (req, res) => {

    const id = parseInt(req.params.id);
    try {
        let computer = await getComputerById(id)
        if(computer === null) {
            res.status(404).send('No computer found.');
        } else {
            console.log(computer);
            res.send(computer);
        }
    }
    catch (error) {
        console.error('Error feching copmuter;', error)
        res.status(500).send(`Error fetching computers: ${error.message}`);
    }
}

// Create a computer
const createComputerController = async(req, res) => {
    const newComputer = {
        data: {
            attributes: {
                name : req.body.name,
                description : req.body.description,
                processor : req.body.processor,
                price : req.body.price,
                manufacturer : req.body.manufacturer
            }
        }
    }; 
    const createdComputer = await createComputer(newComputer);

    res.send(createdComputer);
    console.log(req.body);
}

const deleteComputerController = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await deleteComputer(id);
        res.status(200).send(`Computer with id ${id} was deleted successfully`);
    }
}

module.exports = { getComputersController, getComputerByIdController, createComputerController };