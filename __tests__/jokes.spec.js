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

describe('jokes integration tests', () => {

    it('GET to /jokes, returns status 200', async () => {

        const reg = await supertest(server)
            .post('/api/auth/register')
            .send({
                username: 'Longbottom',
                password: 'password'
            })
        async () => {
            const login = await supertest(server)
                .post('/api/auth/login')
                .send({
                    username: 'Longbottom',
                    password: 'password'
                })
            async () => {
                const res = await supertest(server).get('/api/jokes')
                expect(res.statusCode).toBe(200)
                console.log(res.body)
            }
        }
    });


    it('GET to /jokes, returns array of jokes', async () => {
        const res = await supertest(server).get('/api/jokes')
        console.log(res.body)
    });

});
