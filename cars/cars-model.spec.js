const db = require('../data/dbConfig');

const Cars = require('./cars-model');

describe('cars model', () => {
  beforeEach(async () => {
    await db('cars').truncate();
  });

  describe('insert()', () => {
    it('should insert the car into the db', async () => {
      const query = await Cars.insert({
        make: 'dodge',
        model: 'ram',
        year: '2015',
      });
      console.log(query);

      const cars = await db('cars');

      expect(cars).toHaveLength(1);
    });
  });
  describe('remove()', () => {
    it('should remove the car from the db', async () => {
      const query = await Cars.remove(2);

      const cars = await db('cars');

      expect(cars).toHaveLength(0);
    });
  });
});
