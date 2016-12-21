// Main application file

// Required libraries
const express = require('express');
const path = require('path');
const volleyball = require('volleyball');

// Required files
const routerApi = require('./api/routes');

// App creation
const app = express();
const port = 8585;

// Middleware
// Logging
app.use(volleyball);

// Routers
app.use('/api', routerApi);

// Static file serving
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/materialize', express.static(path.join(__dirname, '/node_modules/materialize-css/dist')));


// Start the port
app.listen(port, () => {
    console.log(`We're online on port ${port}`);
});

// Error logging middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});
