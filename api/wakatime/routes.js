/*eslint new-cap: ["error", { "capIsNew": false }]*/

// Required packages
const express = require('express');

// Constants
const wakatimeAPIKey = '3cefa018-fe33-4b4c-af90-7bfed6b75e72';

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
    .catch(err => console.error(err));
});
