// Required libraries
const https = require('https');

// Export the various routes
module.exports = apiKey => {
    return {
        last7Days: () => new Promise((resolve, reject) => request(apiKey, '/users/current/stats/last_7_days', resolve, reject)),
        last30Days: () => new Promise((resolve, reject) => request(apiKey, '/users/current/stats/last_30_days', resolve, reject)),
        last6Months: () => new Promise((resolve, reject) => request(apiKey, '/users/current/stats/last_6_months', resolve, reject)),
        lastYear: () => new Promise((resolve, reject) => request(apiKey, '/users/current/stats/last_year', resolve, reject)),
        summaries: (start, end) => new Promise((resolve, reject) => request(apiKey, `/users/current/summaries?start=${start}&end=${end}`, resolve, reject)),
        currentUser: () => new Promise((resolve, reject) => request(apiKey, '/users/current', resolve, reject)),
        duration: (date) => new Promise((resolve, reject) => request(apiKey, `/users/current/durations?date=${date}`, resolve, reject)),
    };
};

// Create a base 64 api key
function apiKeyBase64(apiKey) {
    const apiKeyBuffer = new Buffer(apiKey);
    return apiKeyBuffer.toString('base64');
}

// Send a request to the wakatime servers
function request(apiKey, path, resolve, reject) {
    const options = {
        port: 443,
        hostname: 'wakatime.com',
        path: `/api/v1${path}`,
        method: 'GET',
        headers: {
            Authorization: `Basic ${apiKeyBase64(apiKey)}`
        }
    };
    let responseBody = '';
    const req = https.request(options, res => {
        res.on('data', data => {
            responseBody += data;
        });

        res.on('end', () => {
            try {
                const bodyJSON = JSON.parse(responseBody);
                resolve(bodyJSON);
            } catch (err) {
                reject(err);
            }
        });
    });

    req.end();
}
