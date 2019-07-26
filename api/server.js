const express = require('express');

const Cars = require('../cars/cars-model');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>node-server-testing-challenge</h1>');
});

server.post('/cars', (req, res) => {
  const car = req.body;

  Cars.insert(car)
    .then(addedCar => {
      res.status(201).json(addedCar);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.delete('/cars/:id', (req, res) => {
  const {
    params: { id },
  } = req;

  Cars.remove(id)
    .then(deletedCar => {
      res.status(200).json(deletedCar);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
