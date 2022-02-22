const request = require('supertest')
const app = require('../index.js')


describe("ENDPOINTS TEST", () => {
  
  describe("GET /getUser", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/getUser").type('form').send({ 
        userId: "16543545-5" 
      })
      expect(response.statusCode).toBe(200)
    })
  })

  describe("POST /getUserInstruments when passed a userId", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/getUserInstruments").type('form').send({ 
        userId: "16543545-5" 
      })
      expect(response.statusCode).toBe(200)
    })
  })

  describe("GET /getUserInstruments when passed a userId", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/getInstrumentsToInvest")
      expect(response.statusCode).toBe(200)
    })
  })
})