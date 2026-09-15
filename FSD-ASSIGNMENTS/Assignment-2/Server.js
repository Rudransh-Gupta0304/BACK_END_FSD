// Develop a node js application using only the built in http and fs module.

// The application should manage student records stored in a text/JSON file.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // CSS file
    if (req.url === "/style.css" && req.method === "GET") {

        fs.readFile("style.css", (err, data) => {

            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/plain"
                });

                res.end("CSS file not found");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);
        });

    }

    // Question 1 & 2: Display Student Form
    else if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <!DOCTYPE html>

            <html>

            <head>

                <title>Student Management System</title>

                <link rel="stylesheet" href="/style.css">

            </head>

            <body>

                <div class="container">

                    <h1>Student Record Form</h1>

                    <form method="POST" action="/add-student">

                        <label>Student Name:</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter student name"
                            required
                        >

                        <label>Roll Number:</label>

                        <input
                            type="text"
                            name="roll"
                            placeholder="Enter roll number"
                            required
                        >

                        <label>Course:</label>

                        <input
                            type="text"
                            name="course"
                            placeholder="Enter course"
                            required
                        >

                        <label>Email:</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                        >

                        <button type="submit">
                            Add Student
                        </button>

                    </form>

                    <a class="link" href="/students">
                        View Students
                    </a>

                </div>

            </body>

            </html>
        `);
    }


    // Question 3: Receive and Store Student Data
    else if (req.url === "/add-student" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {

            body += chunk.toString();

        });

        req.on("end", () => {

            const data = new URLSearchParams(body);

            const student = {

                name: data.get("name"),

                roll: data.get("roll"),

                course: data.get("course"),

                email: data.get("email")

            };


            fs.readFile("students.json", "utf8", (err, fileData) => {

                let students = [];


                if (!err && fileData) {

                    students = JSON.parse(fileData);

                }


                students.push(student);


                fs.writeFile(
                    "students.json",
                    JSON.stringify(students, null, 2),

                    (err) => {

                        if (err) {

                            res.writeHead(500);

                            res.end("Error saving student");

                            return;

                        }


                        res.writeHead(302, {

                            Location: "/students"

                        });

                        res.end();

                    }
                );

            });

        });

    }


    // Question 4: Display Student Records
    else if (req.url === "/students" && req.method === "GET") {

        fs.readFile("students.json", "utf8", (err, data) => {

            if (err) {

                res.writeHead(500, {

                    "Content-Type": "text/html"

                });

                res.end(
                    "<h1>Error reading student records</h1>"
                );

                return;

            }


            const students = JSON.parse(data);

            let html = `

                <!DOCTYPE html>

                <html>

                <head>

                    <title>Student Records</title>

                    <link rel="stylesheet" href="/style.css">

                </head>

                <body>

                    <div class="records-container">

                        <h1>Student Records</h1>

                        <table>

                            <tr>

                                <th>Name</th>

                                <th>Roll Number</th>

                                <th>Course</th>

                                <th>Email</th>

                            </tr>

            `;


            students.forEach((student) => {

                html += `

                    <tr>

                        <td>${student.name}</td>

                        <td>${student.roll}</td>

                        <td>${student.course}</td>

                        <td>${student.email}</td>

                    </tr>

                `;

            });


            html += `

                        </table>

                        <a class="back" href="/">

                            Add Another Student

                        </a>

                    </div>

                </body>

                </html>

            `;


            res.writeHead(200, {

                "Content-Type": "text/html"

            });

            res.end(html);

        });

    }


    // Invalid route
    else {

        res.writeHead(404, {

            "Content-Type": "text/html"

        });

        res.end(`

            <h1>404 - Page Not Found</h1>

        `);

    }

});


server.listen(3000, () => {

    console.log(
        "Server running at http://localhost:3000"
    );

});