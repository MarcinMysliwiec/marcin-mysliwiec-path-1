import request from 'supertest';
import app from '../../src/server';

describe('POST /api/v1/calculate-profile-surface', () => {
  it('should calculate water fields for a valid profile', async () => {
    const profile = [3, 1, 2, 4, 1, 3, 1, 5, 2, 2, 1];
    const response = await request(app)
      .post('/api/v1/calculate-profile-surface')
      .send({ profile })
      .expect(200);

    expect(response.body).toHaveProperty('waterFields');
    expect(typeof response.body.waterFields).toBe('number');
    expect(response.body.waterFields).toBe(10);
  });

  it('should return 400 for invalid profile', async () => {
    const invalidProfile = 'not an array';
    const response = await request(app)
      .post('/api/v1/calculate-profile-surface')
      .send({ profile: invalidProfile })
      .expect(400);

    expect(response.body).toHaveProperty('error', 'Invalid profile array');
  });
});
