import express from 'express';
import mongoose from 'mongoose';

import { Country } from './data/models/Country';
import { Currency } from './data/models/Currency';
import { CountryTopo } from './data/models/CountryTopo';
import { CoreCapacity } from './data/models/CoreCapacity';

const port = 9500;
let app = express();

mongoose.connect('mongodb://ihr:ihr14a1bc@mongo:27017/ihr');


const db = mongoose.connection;
db.on('error', () => {
  console.error('connection error');
});
db.once('open', () => {
  console.log('connected to mongo');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
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

app.get('/countries-map', (req, res) => {
  CountryTopo.findOne((err, countryTopo) => {
    res.send(countryTopo);
  });
});

app.get('/jeetree', (req, res) => {
  CoreCapacity.find((err, coreCapacities) => {
    res.send(coreCapacities);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
