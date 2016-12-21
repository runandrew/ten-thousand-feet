/*eslint new-cap: ["error", { "capIsNew": false }]*/

// Auth router

// Required packages
const express = require('express');

// Required files
const routerJawbone = require('./jawbone');

// Router creation
const router = express.Router();
module.exports = router;

router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

router.use('/jawbone', routerJawbone);
