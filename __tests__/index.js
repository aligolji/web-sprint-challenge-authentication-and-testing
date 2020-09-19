const supertest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig');

afterAll(async () => {
    await db.destroy();
})

describe('auth integration tests', () => {

    it('TEST NAME GOES HERE', async () => {
        const res = await supertest(server).get('ENDPINT GOES HERE')
        expect(res.statusCode).toBe()
        expect(res.type).toBe('application/json')
        expect(res.body).toBe('')
    });
    it('TEST NAME GOES HERE', async () => {
        const res = await supertest(server).get('ENDPINT GOES HERE')
        expect(res.statusCode).toBe()
        expect(res.type).toBe('application/json')
        expect(res.body).toBe('')
    });


    it('TEST NAME GOES HERE', async () => {
        const res = await supertest(server).get('ENDPINT GOES HERE')
        expect(res.statusCode).toBe()
        expect(res.type).toBe('application/json')
        expect(res.body).toBe('')
    });
    it('TEST NAME GOES HERE', async () => {
        const res = await supertest(server).get('ENDPINT GOES HERE')
        expect(res.statusCode).toBe()
        expect(res.type).toBe('application/json')
        expect(res.body).toBe('')
    });
});

describe('jokes integration tests', () => {

    it('TEST NAME GOES HERE', async () => {
        const res = await supertest(server).get('ENDPINT GOES HERE')
        expect(res.statusCode).toBe()
        expect(res.type).toBe('application/json')
        expect(res.body).toBe('')
    });
    it('TEST NAME GOES HERE', async () => {
        const res = await supertest(server).get('ENDPINT GOES HERE')
        expect(res.statusCode).toBe()
        expect(res.type).toBe('application/json')
        expect(res.body).toBe('')
    });
});