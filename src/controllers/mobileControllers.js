const express = require('express');
const { 
    getMobiles, 
    getMobileById, 
    createMobile 
}  = require('../services/mobileService');
const { deleteMobile } = require('../services/mobileService');

//Get all Mobile devices
const getMobilesController = async (req, res) => {
    try {
        let mobiles = await getMobiles();
        if (mobiles.length === 0 ) {
            res.status(404).send('No mobile devices in stock.');
        } else {
        //res.send(computers);
        res.send(mobiles);
   }

    }
    catch (error) {
        console.error('Error fetching mobile devices,', error)
        res.status(500).send(`Error fetching mobile devices: ${error.message}`);
    }
};

// Get a single Mobile device
const getMobileByIdController = async (req, res) => {

        const id = parseInt(req.params.id);
        try {
            let mobile = await getMobileById(id)
            if(mobile === null) {
                res.status(404).send('No mobile found.');
            } else {
                console.log(mobile);
                res.send(mobile);
            }
        }
        catch (error) {
            console.error('Error feching mobile device;', error)
            res.status(500).send(`Error fetching mobile device: ${error.message}`);
        }
    }

// Create a mobile device
const createMobileController = async (req, res) => {
    const newMobile = {
        data: {
            attributes: {
                name: req.body.name,
                description: req.body.description,
                processor: req.body.processor,
                price: req.body.price,
                manufacturer: req.body.manufacturer
            }
        }
    };
    const createdMobile = await createMobile(newMobile);

    res.send(createdMobile);
    console.log(req.body);
}

const updateMobileController = async (req, res) => {
    const id = parseInt(req.params.id);
    const updatedMobileData = req.body;

    try {
        let existingMobile = await getMobileById(id);

        if (existingMobile) {
            existingMobile = { ...existingMobile, ...updatedMobileData };
            const updatedMobile = await updateMobile(id, existingMobile);

            res.json(updatedMobile);
        }
    } catch (error) {
        console.error('Error updating mobile: ', error);
        res.status(500).send(`Error updating mobile: ${error.message}`);
    }

}

const deleteMobileController = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await deleteMobile(id);
        res.status(200).send(`Mobile device with id ${id} was deleted successfully`);
    } catch (error) {
        console.error('Error trying to delte mobile device: ', error);
        res.status(404).send(`Error trying to delete mobile device: ${error.message}`);
    }
}

module.exports = { 
        getMobilesController,
        getMobileByIdController, 
        createMobileController, 
        updateMobileController,
        deleteMobileController
    };