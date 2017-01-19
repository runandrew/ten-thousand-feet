/*eslint new-cap: ["error", { "capIsNew": false }] camelcase: ["error", {properties: "never"}] */

// Required packages
const express = require('express');
const jawboneApi = require('jawbone-up');

// Required files
const { jawboneAuth } = require('../../auth/jawbone');

// Router creation
const router = express.Router();
module.exports = router;

// USE - Jawbone Authentication
router.use((req, res, next) => {
    const options = {
        access_token: req.user.token,
        client_id: jawboneAuth.clientID,
        client_secret: jawboneAuth.clientSecret
    };

    const up = jawboneApi(options); // Create an up instance with the user's credentials
    req.upAPI = up; // Attach the instance to the request object, to be used in subsequent routes

    next();
});

// GET - /api/jawbone/moves - Grab physical data for the past 10 days
router.get('/moves', (req, res, next) => {
    req.upAPI.moves.get({}, function(err, body) {
        if (err) {
            console.log('Error receiving Jawbone UP data');
            res.sendStatus(500);
        } else {
            const moveData = JSON.parse(body);
            res.send(moveData.data);
        }
    });
});
