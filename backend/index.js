const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to allow CORS (Cross-Origin Resource Sharing)
const cors = require('cors');
app.use(cors({
  origin: 'http://18.216.222.56',
));

// Sample data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// API endpoint to get users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
