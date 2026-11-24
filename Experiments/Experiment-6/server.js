
/*
====================================================
EXPERIMENT 6

TITLE: Create a Simple Express.js Server to Serve
HTML Files Using the fs Module.

AIM:
To create an Express.js server that serves separate
HTML files for /, /about and /contact routes.
====================================================
*/

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading Home Page');
        }

        res.send(data);
    });
});

// About Route
app.get('/about', (req, res) => {
    fs.readFile(path.join(__dirname, 'about.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading About Page');
        }

        res.send(data);
    });
});

// Contact Route
app.get('/contact', (req, res) => {
    fs.readFile(path.join(__dirname, 'contact.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading Contact Page');
        }

        res.send(data);
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

/*
====================================================


====================================================
CONCLUSION:

Successfully created an Express.js server using
the fs module to read and serve separate HTML
files through three different routes.
====================================================
*/
