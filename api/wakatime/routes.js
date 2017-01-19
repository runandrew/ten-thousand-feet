/*eslint new-cap: ["error", { "capIsNew": false }]*/

// Required packages
const express = require('express');

// Required files
const { wakatimeAPIKey } = require('../../.secrets.js');

// Required files
const wakatime = require('./interface.js')(wakatimeAPIKey);

// Router creation
const router = express.Router();
module.exports = router;


// GET - /api/wakatime/durations?date - Grab durations data for one specific date
router.get('/durations', (req, res, next) => {
    wakatime.duration(req.query.date)
    .then(result => {
        res.send(result);
    })
    .catch(err => next(err));
});
