import express from 'express';
import fs from 'fs';

const app = express();

const PORT = 3000;

// Home Page
app.get('/', (req, res) => {

    fs.readFile('./Pages/index.html', 'utf-8', (err, data) => {

        if (err) {
            res.status(500).send('Error reading file');
            return;
        } else {
            res.send(data);
        }

    });

});


// About Page
app.get('/about', (req, res) => {

    fs.readFile('./Pages/about.html', 'utf-8', (err, data) => {

        if (err) {
            res.status(500).send('Error reading file');
            return;
        } else {
            res.send(data);
        }

    });

});


// Contact Page
app.get('/contact', (req, res) => {

    fs.readFile('./Pages/contact.html', 'utf-8', (err, data) => {

        if (err) {
            res.status(500).send('Error reading file');
            return;
        } else {
            res.send(data);
        }

    });

});


// Start Server
app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});