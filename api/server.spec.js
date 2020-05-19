const request = require('supertest');

const server = require('./server');

describe('server', () => {
  it('db environment set to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('POST /cars', () => {
    it('should return a status of 201 Created', () => {
      return request(server)
        .post('/cars')
        .send({ make: 'chevy', model: 'camaro', year: '2019' })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe('DELETE /cars/:id', () => {
    it('should return a status of 200 ok', () => {
      return request(server)
        .delete('/cars/1')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
