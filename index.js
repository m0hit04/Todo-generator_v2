const express = require('express');
const cors = require('cors');
const todos = require('./todos'); // Assuming the todos array is in src/todos.js

const app = express();

// Enable CORS
app.use(cors());

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  let randomTodos = [];
  for (let i = 0; i < todos.length; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }

  // Send a JSON response with the random todos
  res.json({
    todos: randomTodos,
  });
});

// Start the Express server on port 8787
const port = 8080;
app.listen(port);
