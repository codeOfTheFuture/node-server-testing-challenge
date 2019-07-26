const db = require('../data/dbConfig');

module.exports = {
  insert,
  remove,
};

async function insert(car) {
  return db('cars').insert(car, 'id');
}

function remove(id) {
  return db('cars')
    .where('id', id)
    .del();
}
