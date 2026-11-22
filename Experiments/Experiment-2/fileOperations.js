
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'student.txt');

// 1. CREATE a file
fs.writeFileSync(filePath, 'Name: Rahul\nAge: 21');

console.log("1. File created successfully!");

// 2. READ a file
let data = fs.readFileSync(filePath, 'utf8');

console.log("\n2. File Content:");
console.log(data);

// 3. UPDATE a file
fs.appendFileSync(filePath, '\nCourse: B.Tech CSE');

console.log("\n3. File updated successfully!");

// Read updated content
data = fs.readFileSync(filePath, 'utf8');

console.log("\nUpdated File Content:");
console.log(data);

// 4. DELETE a file
fs.unlinkSync(filePath);

console.log("\n4. File deleted successfully!");
