const request = require('supertest');
const server = require('../../api/server');

describe('auth-router.js', () => {
    it('should login a user with username/password', async () => {
        // Should return 200 ok for good login
        const res = await request(server).post('/api/auth/login').send({"username": "nathansl2003", "password": "password"})
            expect(res.status).toBe(200);
        })

        // Should return 500 for missing data
        it('should login a user with username. missing password', async () => {
            const res = await request(server).post('/api/auth/login').send({"username": "nathansl2003"})
                expect(res.status).toBe(500);
    })

    // Should return 401 for unauthorized
    it('should login a user with username, bad password', async () => {
        const res = await request(server).post('/api/auth/login').send({"username": "nathansl2003", "password": "passwor"})
            expect(res.status).toBe(401);
    })

    // Should return 201 for registered user
    it('should register a user with username/password', async () => {
        const res = await request(server).post('/api/auth/register').send({"username": "nathansl2000", "password": "password"})
            expect(res.status).toBe(201);
    })

    // Should return 500 for  missing register information
    it('fail to register with 500 for missing data for user', async () => {
        const res = await request(server).post('/api/auth/register').send({"username": "nathansl20005"})
            expect(res.status).toBe(500);
    })
})