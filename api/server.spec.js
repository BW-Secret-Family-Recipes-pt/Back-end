const supertest = require("supertest")
const server = require("./server")
const db = require("../data/dbConfig.js")
const bcrypt = require('bcryptjs')




describe('auth router', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })

    it('should display correct enviroment', async function () {
        expect(process.env.DB_ENV).toBe('testing')
    })

    it('POST api/register - should return status 200', async function () {
        return supertest(server)
            .post('/api/register')
            .send({ username: 'test123', password: 'password', email: 'email' })
            .then(res => {

                expect(res.status).toBe(200)
                expect(res.body.username).toBe('test123')
                expect(res.body.email).toBe('email')
            })
    })

    it('Post api/auth/login - token should be defined', async function () {
        await supertest(server)
            .post('/api/register')
            .send({ username: 'test123', password: 'password', email: 'email' })

        return supertest(server)
            .post('/api/login')
            .send({ username: 'test123', password: 'password' })
            .expect(res => {
                expect(res.body.token).toBeDefined();
            })
    })

    it('Get api/users/1 - should be able to get the first user', async () => {
        await supertest(server)
            .post('/api/register')
            .send({ username: 'test123', password: 'password', email: 'email' })

        const token = await supertest(server)
            .post('/api/login')
            .send({ username: 'test123', password: 'password' })
            .then(res => {
                return res.body.token
            })
            
        return supertest(server)
        .get('/api/users/1')
        .set('authorization', `${token}`)
        .then((res) => {
            console.log(res.body)
            expect(res.status).toBe(200)
            expect(res.body.username).toBe('test123')
                
        })
        
        })
})

describe('recipes router', () => {
    beforeEach(async () => {
        await db('users').truncate()
        await db('recipes').truncate()

        await supertest(server)
        .post('/api/register')
        .send({ username: 'test123', password: 'password', email: 'email' })

    
    })

    it('Post /api/recipes', async () => {

        const token = await supertest(server)
        .post('/api/login')
        .send({ username: 'test123', password: 'password' })
        .then(res => {
            return res.body.token
        })
        
    return supertest(server)
    .get('/api/users/1')
    .set('authorization', `${token}`) 

        return supertest(server)
        .post('/api/recipes')
        .send({user_id: 1,
            title: "recipe1",
            source: "source1",
            ingredients: "ingredients1",
            instructions: "instructions1",
            category: "category1" })
        .then(res => {
            console.log(res.body)
            expect(res.status).toBe(200)
            expect(res.body.title).toBe(recipe1)
            
        })
    })
})
