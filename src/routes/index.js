const express = require('express');
const { computersRouter } = require('./computersRouter');
const { mobilesRouter } = require('./mobilesRouter');
const { televisionsRouter } = require('./televisionsRouter');

const router = express.Router();

router.use("/computers", computersRouter);
router.use("/mobile_devices", mobilesRouter);
router.use("/televisions", televisionsRouter);

module.exports = { router, computersRouter, mobilesRouter, televisionsRouter };