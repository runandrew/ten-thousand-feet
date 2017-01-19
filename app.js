// Main application file

// Required libraries
const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const fs = require('fs');
const https = require('https');

// Required files
const routerApi = require('./api/routes');
const routerAuth = require('./auth');

// App creation
const app = express();
const PORT = 8585;

// Setup SSL
const sslOptions = {
    key: fs.readFileSync('./server/server.key'),
    cert: fs.readFileSync('./server/server.crt')
};

// Middleware

// Logging
app.use(volleyball);
// Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Sessions
app.use(session({
    secret: 'radicalPenguins',
    resave: false,
    saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport serialization
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

// Routers
app.use('/api', routerApi);
app.use('/auth', routerAuth);

// Static file serving
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/materialize', express.static(path.join(__dirname, '/node_modules/materialize-css/dist')));

const validFrontendRoutes = ['/', '/login', '/graphs', '/graphs/:dayId'];
const indexPath = path.join(__dirname, '/public', 'index.html');

// Create valid frontend route, create a GET that sends the index path
validFrontendRoutes.forEach(function (stateRoute) {
    app.get(stateRoute, function (req, res) {
        res.sendFile(indexPath);
    });
});

// Start the server
https.createServer(sslOptions, app).listen(PORT, function(){
    console.log(`We're online on port ${PORT}`);
});

// Error logging middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});
