import express from 'express';
import mongoose from 'mongoose';

const port = 9500;
let app = express();

mongoose.connect('mongodb://mongo:27017');

let Chocolate;

const testMongo = () => {
  const chocolateSchema = mongoose.Schema({
    name: String,
    type: String,
    bars: Number,
    sugarFree: Boolean,
  });

  Chocolate = mongoose.model('Chocolate', chocolateSchema);

  const KitKat = new Chocolate({
    name: 'KitKat',
    type: 'dark',
    bars: 4,
    sugarFree: false,
  });

  KitKat.save();
};

const db = mongoose.connection;
db.on('error', () => {
  console.error('connection error');
});
db.once('open', () => {
  console.log('connected to mongo');

  testMongo();
});

app.get('/', (req, res) => {
  Chocolate.find((err, chocolates) => {
    if (err) res.send('Hello, world');
    res.send(chocolates);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
