/*eslint new-cap: ["error", { "capIsNew": false }]*/

// Auth router

// Required packages
const express = require('express');

// Required files
const { routerJawbone } = require('./jawbone');

// Router creation
const router = express.Router();
module.exports = router;

// GET - /api/logout - logs out the current user
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

// GET - /api/me - gets the current user
router.get('/me', (req, res, next) => {
    const userInfo = req.user ? Object.assign({}, req.user) : { noUser: true };
    delete userInfo.token;
    delete userInfo.xid;
    res.json(userInfo);
});

router.use('/jawbone', routerJawbone);
