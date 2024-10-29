const cors = require('cors');
const express = require('express');
const { getAllBooks, getBooksById } = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

// Endpoint to get all books

app.get('/books', async (req, res) => {
  const books = getAllBooks();
  res.json({ books });
});

//Endpoint to get book details by id

app.get('/books/details/:id', async (req, res) => {
  let book = getBooksById(parseInt(req.params.id));

  res.json({ book });
});

module.exports = { app };

// app.listen(3000, () => {
//   console.log(`Server running on port 3000`);
// });

// Run the index.js file using command bcz this exercise is for test cases(In test file we are running server):-  node server.js
