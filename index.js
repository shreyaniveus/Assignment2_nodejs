const express = require('express');
const app = express();

// Set up a GET API endpoint
app.get('/api/info/:id', (req, res) => {
  // Extract the query parameters and path parameters from the request object
  const queryParam = req.query.param;
  const pathParam = req.params.id;

  
  const response = {
    queryParam,
    pathParam
  };

  
  res.send(response);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
