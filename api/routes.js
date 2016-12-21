/*eslint new-cap: ["error", { "capIsNew": false }]*/

// API router

// Required packages
const express = require('express');

// Required files
const routerWakatime = require('./wakatime/routes');

// Router creation
const router = express.Router();
module.exports = router;

router.use('/wakatime', routerWakatime);
