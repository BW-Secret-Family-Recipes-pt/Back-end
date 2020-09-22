const supertest = require("supertest")
const server = require("./server")
const db = require("../data/dbConfig.js")
const bcrypt = require('bcryptjs')

describe('auth router', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })

    it('should display correct enviroment', async function() {
        expect(process.env.DB_ENV).toBe('testing')
    })

    it('POST api/register - should return status 200 and username', function(){
        return supertest(server)
        .post('/api/register')
        .send({ username: 'test123', password: 'password', email: 'email'})
        .then(res => {
            expect(res.status).toBe(200)
            expect(res.body.username).toBe('test123')
            
        })
    })

    
})