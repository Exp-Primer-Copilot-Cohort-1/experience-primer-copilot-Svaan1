// Create web server
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a list of comments
const comments = [
  { name: 'John', message: 'Hello!' },
  { name: 'Jane', message: 'Hi!' },
  { name: 'Jack', message: 'Good morning!' },
];

// Create a route to return comments list
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the web server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});