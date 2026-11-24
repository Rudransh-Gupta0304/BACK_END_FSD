
/*
====================================================
EXPERIMENT 5
TITLE: Create Routes for GET, POST, PUT and DELETE
in Node.js.

AIM:
To create routes that handle GET, POST, PUT and
DELETE requests using the Node.js HTTP module.
====================================================
*/

const http = require('http');

let students = [
    { id: 1, name: "Rahul", age: 21 },
    { id: 2, name: "Aman", age: 20 }
];

const server = http.createServer((req, res) => {

    // Set response header
    res.setHeader('Content-Type', 'application/json');

    // GET: Retrieve all students
    if (req.method === 'GET' && req.url === '/students') {

        res.statusCode = 200;
        res.end(JSON.stringify(students));
    }

    // POST: Add a new student
    else if (req.method === 'POST' && req.url === '/students') {

        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const newStudent = JSON.parse(body);

            students.push(newStudent);

            res.statusCode = 201;
            res.end(JSON.stringify({
                message: "Student added successfully",
                student: newStudent
            }));
        });
    }

    // PUT: Update an existing student
    else if (req.method === 'PUT' && req.url.startsWith('/students/')) {

        const id = parseInt(req.url.split('/')[2]);

        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const updatedData = JSON.parse(body);

            const student = students.find(s => s.id === id);

            if (student) {
                Object.assign(student, updatedData);

                res.statusCode = 200;
                res.end(JSON.stringify({
                    message: "Student updated successfully",
                    student: student
                }));
            } else {
                res.statusCode = 404;
                res.end(JSON.stringify({
                    message: "Student not found"
                }));
            }
        });
    }

    // DELETE: Remove a student
    else if (req.method === 'DELETE' && req.url.startsWith('/students/')) {

        const id = parseInt(req.url.split('/')[2]);

        const index = students.findIndex(s => s.id === id);

        if (index !== -1) {
            students.splice(index, 1);

            res.statusCode = 200;
            res.end(JSON.stringify({
                message: "Student deleted successfully"
            }));
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({
                message: "Student not found"
            }));
        }
    }

    // Invalid route
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }

});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

/*
====================================================

====================================================
CONCLUSION:

Successfully created GET, POST, PUT and DELETE
routes using the Node.js HTTP module to perform
CRUD operations on student records.
====================================================
*/
