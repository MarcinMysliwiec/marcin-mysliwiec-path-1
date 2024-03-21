import request from 'supertest';
import { server } from '../../src/server';
import { calculateWaterFields } from '../../src/services/water-service';

describe('Profile Surface Routes', () => {
  it('should calculate water fields correctly', async () => {
    const profile = [3, 1, 2, 4, 0, 1, 3, 2];
    const expectedResult = { waterFields: calculateWaterFields(profile) };
    const response = await request(server)
      .post('/api/v1/calculate-profile-surface')
      .send({ profile })
      .expect(200);
    expect(response.body).toEqual(expectedResult);
  });

  it('should handle invalid profile array', async () => {
    const profile = 'invalid'; // Sending an invalid profile
    const expectedErrorMessage = 'Invalid profile array';

    const response = await request(server)
      .post('/api/v1/calculate-profile-surface')
      .send({ profile })
      .expect(400);
    expect(response.body.error).toBe(expectedErrorMessage);
  });
});
