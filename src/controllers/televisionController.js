const express = require('express');
const {
    getTelevisions, 
    getTelevisionById,
    updateTelevision, 
    deleteTelevision
} = require('../services/televisionService');

// Get all Televisions
const getTelevisionsController = async (req, res) => {
    try {
        let televisions = await getTelevisions();
        if (televisions.length === 0) {
            res.status(404).send("No televisions in stock.");
        } else {
            res.json(televisions);
        }
    } catch (error) {
        console.error('Error fetching televisions: ', error)
        res.status(500).send(`Error fetching televisions: ${error.message}`);
    }
};

// Get a single Television
const getTelevisionByIdController = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        let television = await getTelevisionById(id);
        if (television === null) {
            res.status(404).send('No Television found.');
        } else {
            res.sednd(television);
        }
    }
    catch (error) {
        console.error('Error fetching televisions: ', error)
        res.status(500).send(`Error fetching televisions: ${error.message}`);
    }
}

// Create a Television
const createTelevisionController = async (req, res) => {
    const newTelevision = {
        data: {
            attributes: {
                name: req.body.name,
                description: req.body.description,
                manufacturer: req.body.manufacturer,
                price: req.body.price,
                screen_size: req.body.screen_size
            }
        }
    };
    const createTelevision = await createTelevision(newTelevision);

    res.send(createTelevision);
}

// Update a Television
const updateTelevisionController = async ( req, res) => {
    const id = parseInt(req.params.id);
    const updatedTelevisionData = req.body;

    try {
        let existingTelevision = await getTelevisionById(id);

        if (!existingTelevision) {
            existingTelevision = { ...existingTelevision, ...updatedTelevisionData };
            const updatedTelevision = await updateTelevision(id, existingTelevision);

            res.json(updatedTelevision);
        }
    } catch (error) {
        console.error('Error updating television: ', error);
        res.status(500).send(`Error updating television: ${error.message}`);
    }
}

// Delete a Television
const deleteTelevisionController = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await deleteTelevision(id);
        res.status(200).send(`Television with id ${id} was deleted successfully`);
    }
    catch (error) {
        console.error('Error trying to delete television: ', error);
        res.status(404).send(`Error trying to delete television:  ${error.message}`);
    }
}

module.exports = {
    getTelevisionsController,
    getTelevisionByIdController,
    createTelevisionController,
    updateTelevisionController,
    deleteTelevisionController
};