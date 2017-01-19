/*eslint new-cap: ["error", { "capIsNew": false }]*/

// Required packages
const express = require('express');
const passport = require('passport');
const JawboneStrategy = require('passport-oauth').OAuth2Strategy;

// Router creation
const routerJawbone = express.Router();

// Authentication parameters
const jawboneAuth = {
    clientID: 'H1T3Ml7A6cw',
    clientSecret: 'd980021dbf3e14592b0ed9fc16b5cfeeafd04fad',
    authorizationURL: 'https://jawbone.com/auth/oauth2/auth',
    tokenURL: 'https://jawbone.com/auth/oauth2/token',
    callbackURL: 'https://localhost:8585/auth/jawbone/callback'
};

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

    // Temporarily hack the token to save for every request
    process.tempStorage = {
        upAccess: token
    };

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
    successRedirect: '/graphs', // or wherever
    failureRedirect: '/login' // or wherever
})
);
