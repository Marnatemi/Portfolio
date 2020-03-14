const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the server');
});

app.listen(4000, () => console.log('running on port 4000'));
