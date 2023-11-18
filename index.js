const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

const bookRoutes = require('./books/routes');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/books', bookRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});