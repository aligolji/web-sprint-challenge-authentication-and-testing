const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');


beforeAll(async () => {
    await db('users')
        .truncate();
});

afterAll(async () => {
    await db.destroy();
})


describe('auth login integration tests', () => {

    it('POST to /login, returns message "Welcome Dumbledore."', async () => {
        const res = await supertest(server)
            .post('/api/auth/register')
            .send({
                username: 'Dumbledore',
                password: 'password'
            })
        async () => {
            const login = await supertest(server)
                .post('/api/auth/login')
                .send({
                    username: 'Dumbledore',
                    password: 'password'
                })
            expect(login.body.message).toBe('Welcome Dumbledore.')
        }
    });

    it('POST to /login, returns error message "Invalid Credentials" since username is misspelled', async () => {
        const res = await supertest(server)
            .post('/api/auth/login')
            .send({
                username: 'Dumbledo',
                password: 'nogoodpass'
            })
        expect(res.body.message).toBe('Invalid Credentials')
    });

    it('POST to /login, returns error message "Invalid Password" due to incorrectly entered password', async () => {
            const login = await supertest(server)
                .post('/api/auth/login')
                .send({
                    username: 'Dumbledore',
                    password: 'WRONGpass'
                })
            expect(login.body.message).toBe('Invalid Password')
    });

    it('POST to /login, returns error 401 due to invalid login information', async () => {
        const res = await supertest(server)
            .post('/api/auth/login')
            .send({
                username: 'Malfoy',
                password: 'passwordInvalid'
            })
        expect(res.statusCode).toBe(401)
    });
});

