const express = require('express');
const app = express();
const logger = require('./logger.js');
const authorize = require('./authorize.js');

// Uncomment this if you want to apply logger and authorize to all routes
// app.use([logger, authorize]);

// Serve static files from the 'public' directory
app.use(express.static('./public'));

// Define route handlers
app.get('/', (req, res) => {
  res.end("Home page");
});

app.get('/about', (req, res) => {
  res.end('About page');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

// Apply logger and authorize middleware only to this route
app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user); // Ensure req.user is set by authorize middleware
  res.send('Items');
});

// Start the server
app.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
