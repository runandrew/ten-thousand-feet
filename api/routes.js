/*eslint new-cap: ["error", { "capIsNew": false }]*/

// API router

// Required packages
const express = require('express');

// Required files
const routerWakatime = require('./wakatime/routes');
const routerJawbone = require('./jawbone/routes');

// Router creation
const router = express.Router();
module.exports = router;

// Routing
router.use('/wakatime', routerWakatime);
router.use('/jawbone', routerJawbone);
