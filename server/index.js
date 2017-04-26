import express from 'express';
import mongoose from 'mongoose';

import { initialData } from './initialDb';

const port = 9500;
let app = express();

mongoose.connect('mongodb://mongo:27017');

let Country, Currency;

const db = mongoose.connection;
db.on('error', () => {
  console.error('connection error');
});
db.once('open', () => {
  console.log('connected to mongo');

  const models = initialData();
  [Country, Currency] = [models.Country, models.Country];
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
  Chocolate.find((err, chocolates) => {
    if (err) res.send('Hello, world');
    res.send(chocolates);
  });
});

app.get('/countries', (req, res) => {
  Country.find((err, countries) => {
    res.send(countries)
  });
});

app.get('/currencies', (req, res) => {
  Currency.find((err, currencies) => {
    res.send(currencies)
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
