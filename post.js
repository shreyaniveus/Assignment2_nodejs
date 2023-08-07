// Import the required modules
const express = require('express');
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Sample array of data
const dataArray = [];

// Set up a POST API endpoint
app.post('/api/data', (req, res) => {
  // Get the JSON data from the request body
  const jsonData = req.body;

  // Add the JSON data to the array
  dataArray.push(jsonData);

  // Send the array of data as the response
  res.json(dataArray);
});

// Start the server on port 3000
const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
