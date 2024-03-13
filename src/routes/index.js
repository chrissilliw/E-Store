const express = require('express');
const { computersRouter } = require('./computersRouter');
const { mobilesRouter } = require('./mobilesRouter');

const router = express.Router();

router.use("/computers", computersRouter);
router.use("/mobile_devices", mobilesRouter);

module.exports = { router, computersRouter, mobilesRouter };