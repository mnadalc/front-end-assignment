const express = require('express');
const ships = require('./ships.json');
const server = express();
const port = 4000;

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

server.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  next();
});

server.get(['/api/ships', '/api/ships/:query'], (req, res) => {
  const query = req.params.query;

  if (!query) {
    return res.json(ships);
  }

  const matches = ships.filter((ship) =>
    ship.heading.toLowerCase().includes(query.toLowerCase())
  );

  res.json(matches);
});
