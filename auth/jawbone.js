/*eslint new-cap: ["error", { "capIsNew": false }] camelcase: ["error", {properties: "never"}] */

// Required packages
const express = require('express');
const passport = require('passport');
const JawboneStrategy = require('passport-oauth').OAuth2Strategy;

// Required files
const { jawboneAuth } = require('../.secrets.js'); // Authentication parameters

// Router creation
const routerJawbone = express.Router();

// Exports
module.exports = {
    routerJawbone,
    jawboneAuth
};

passport.use('jawbone', new JawboneStrategy({
    clientID: jawboneAuth.clientID,
    clientSecret: jawboneAuth.clientSecret,
    authorizationURL: jawboneAuth.authorizationURL,
    tokenURL: jawboneAuth.tokenURL,
    callbackURL: jawboneAuth.callbackURL
}, function(token, refreshToken, profile, done) {
    const options = {
        access_token: token,
        client_id: jawboneAuth.clientID,
        client_secret: jawboneAuth.clientSecret
    };
    const up = require('jawbone-up')(options);

    up.me.get({}, function(err, body) {
        if (err) {
            console.log('Error receiving Jawbone UP data');
        } else {
            const userData = JSON.parse(body).data;
            console.log('****** THIS IS THE ME GET ********', userData);
            userData.token = token;
            done(null, userData);
        }
    });
}));

routerJawbone.get('/', passport.authenticate('jawbone', { scope: ['basic_read', 'move_read'] }));

routerJawbone.get('/callback',
passport.authenticate('jawbone', {
    successRedirect: '/graphs',
    failureRedirect: '/login'
})
);
