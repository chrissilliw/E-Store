const express = require('express');
const { computersRouter } = require('./computersRouter');
const { mobilesRouter } = require('./mobilesRouter');
const { televisionsRouter } = require('./televisionsRouter');
const { audiosRouter } = require('./audiosRouter');

const router = express.Router();

router.use("/computers", computersRouter);
router.use("/mobile_devices", mobilesRouter);
router.use("/televisions", televisionsRouter);
router.use("/audio_devices", audiosRouter);

module.exports = { router, computersRouter, mobilesRouter, televisionsRouter, audiosRouter };