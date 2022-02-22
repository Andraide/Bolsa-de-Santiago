const request = require('supertest')
const app = require('../index.js')


describe("POST /users", () => {

  describe("when passed a username and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/getUserInstruments").send({ 
        userId: "16543545-5" 
      })
      expect(response.statusCode).toBe(200)
    })
  })
})