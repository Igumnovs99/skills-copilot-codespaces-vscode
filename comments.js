// Create web server
const express = require('express');
const app = express();
// Create a port
const PORT = 5000;
// Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Create a server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Create a route for comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});
// Create a route for members
app.get('/members', (req, res) => {
    res.send('This is the members page');
});
// Create a route for skills
app.get('/skills', (req, res) => {
    res.send('This is the skills page');
});
// Create a route for about
app.get('/about', (req, res) => {
    res.send('This is the about page');
});