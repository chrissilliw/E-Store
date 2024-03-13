const express = require('express');
const { 
    getMobiles, 
    getMobileById, 
    createMobile 
}  = require('../services/mobileService');

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

module.exports = { 
        getMobilesController,
        getMobileByIdController, 
        createMobileController, 
    };