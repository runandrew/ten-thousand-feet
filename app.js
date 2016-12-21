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
const port = 8585;

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
    secret: 'radicalPenguins'
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport serialization
passport.serializeUser(function (user, done) {
    console.log('*********************** SERIALIZE USER ***********************');
    console.log(user);
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    console.log('*********************** DESERIALIZE USER ***********************');
    console.log(id);
    done(null, id);
});

// Log the session object for each call
// app.use((req, res, next) => {
//     if (!req.session.count) req.session.count = 0;
//     console.log('**** This is the session count: ', ++req.session.count);
//
//     console.log('------------------- THIS IS THE CURRENT SESSION -------------------');
//     console.log(req.session);
//     console.log('------------------ / THIS IS THE CURRENT SESSION ------------------');
//     next();
// });


// Routers
app.use('/api', routerApi);
app.use('/auth', routerAuth);

// Static file serving
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/materialize', express.static(path.join(__dirname, '/node_modules/materialize-css/dist')));

var validFrontendRoutes = ['/', '/login', '/graphs'];
var indexPath = path.join(__dirname, '/public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
    app.get(stateRoute, function (req, res) {
        res.sendFile(indexPath);
    });
});

// Start the server
// app.listen(port, () => {
//     console.log(`We're online on port ${port}`);
// });

const secureServer = https.createServer(sslOptions, app).listen(port, function(){
    console.log(`We're online on port ${port}`);
});

// Error logging middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});
