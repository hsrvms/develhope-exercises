const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
require('express-async-errors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  {
    id: 1,
    name: 'Earth',
  },
  {
    id: 2,
    name: 'Mars',
  },
];

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});