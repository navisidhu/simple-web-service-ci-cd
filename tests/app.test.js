const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
    it('should respond with Hello iOR!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Hello iOR!');
    });
});