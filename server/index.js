import express from 'express';

const port = 9500;
let app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
