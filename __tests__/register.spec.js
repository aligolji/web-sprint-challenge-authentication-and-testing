const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');


beforeEach(async () => {
    await db('users')
        .truncate();
});

afterAll(async () => {
    await db.destroy();
})


describe('auth registration integration tests', () => {

    it('POST to /register, returns a status 201, new user registered', async () => {
        const res = await supertest(server)
            .post('/api/auth/register')
            .send({
                username: 'Harry',
                password: 'password'
            })
        expect(res.statusCode).toBe(201)
    });

    it('POST to /register, returns the username "Hermione" in the response body', async () => {
        const res = await supertest(server)
            .post('/api/auth/register')
            .send({
                username: 'Hermione',
                password: 'password'
            })
        expect(res.body.username).toBe('Hermione')

    });

    it('POST to /register, returns error 401 due to missing username in sent object', async () => {
        const res = await supertest(server)
            .post('/api/auth/register')
            .send({
                password: 'password'
            })
        expect(res.body.message).toBe('Username required.')
    });
    
    it('POST to /register, returns a JSON data object', async () => {
        const res = await supertest(server)
        .post('/api/auth/register')
        .send({
            username: 'Lord Voldemort',
            password: 'password'
        })
        expect(res.type).toBe('application/json')
    });
});
