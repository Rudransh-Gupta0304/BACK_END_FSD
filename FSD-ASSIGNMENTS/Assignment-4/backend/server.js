const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

const dataFile = path.join(__dirname, "requests.json");

app.use(cors());
app.use(express.json());


// Read data from requests.json
function readRequests() {
    const data = fs.readFileSync(dataFile, "utf-8");
    return JSON.parse(data);
}


// Write data to requests.json
function writeRequests(requests) {
    fs.writeFileSync(
        dataFile,
        JSON.stringify(requests, null, 2)
    );
}


// GET - Get all requests
app.get("/api/requests", (req, res) => {
    try {
        const requests = readRequests();
        res.json(requests);
    } catch (error) {
        res.status(500).json({
            message: "Failed to read requests"
        });
    }
});


// GET - Get request by ID
app.get("/api/requests/:id", (req, res) => {
    try {
        const requests = readRequests();

        const id = Number(req.params.id);

        const request = requests.find(item => item.id === id);

        if (!request) {
            return res.status(404).json({
                message: "Request not found"
            });
        }

        res.json(request);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get request"
        });
    }
});


// POST - Create a new request
app.post("/api/requests", (req, res) => {
    try {
        const requests = readRequests();

        const {
            studentName,
            email,
            category,
            description,
            priority
        } = req.body;

        if (
            !studentName ||
            !email ||
            !category ||
            !description ||
            !priority
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newRequest = {
            id: requests.length > 0
                ? Math.max(...requests.map(item => item.id)) + 1
                : 1,
            studentName,
            email,
            category,
            description,
            priority
        };

        requests.push(newRequest);

        writeRequests(requests);

        res.status(201).json(newRequest);

    } catch (error) {
        res.status(500).json({
            message: "Failed to create request"
        });
    }
});


// PUT - Update request
app.put("/api/requests/:id", (req, res) => {
    try {
        const requests = readRequests();

        const id = Number(req.params.id);

        const index = requests.findIndex(
            item => item.id === id
        );

        if (index === -1) {
            return res.status(404).json({
                message: "Request not found"
            });
        }

        const {
            studentName,
            email,
            category,
            description,
            priority
        } = req.body;

        requests[index] = {
            id,
            studentName,
            email,
            category,
            description,
            priority
        };

        writeRequests(requests);

        res.json(requests[index]);

    } catch (error) {
        res.status(500).json({
            message: "Failed to update request"
        });
    }
});


// DELETE - Delete request
app.delete("/api/requests/:id", (req, res) => {
    try {
        const requests = readRequests();

        const id = Number(req.params.id);

        const index = requests.findIndex(
            item => item.id === id
        );

        if (index === -1) {
            return res.status(404).json({
                message: "Request not found"
            });
        }

        const deletedRequest = requests.splice(index, 1)[0];

        writeRequests(requests);

        res.json({
            message: "Request deleted successfully",
            request: deletedRequest
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete request"
        });
    }
});


app.listen(PORT, () => {
    console.log(`Campus Help Desk running at http://localhost:${PORT}`);
});