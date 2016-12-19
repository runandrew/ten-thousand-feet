// Main application file

// Required libraries
const express = require('express');
const path = require('path');

// App creation
const app = express();
const port = 8585;

app.use('/', express.static(path.join(__dirname, '/public')));

// Start the port
app.listen(port, () => {
    console.log(`We're online on port ${port}`);
});

// Error logging middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});
