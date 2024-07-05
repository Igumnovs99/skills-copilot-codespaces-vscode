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