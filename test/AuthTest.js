const chai = require("chai");
const chaiHttp = require("chai-http");
const authRoutes = require("../routes/auth");
const url = "http://localhost:3001";
//assertion Style
chai.should();

chai.use(chaiHttp);

describe("Auth Api", () => {
  /**
   * Test the POST Register Route
   */
  describe("POST /api/user/register", () => {
    it("It should POST user register", (done) => {
      const user = {
        name: "Pedro Benavente",
        email: "pbenaventteeee@gmail.com",
        password: "qwertyijkds",
      };
      chai
        .request(url)
        .post("/api/user/register")
        .send(user)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          //response.body.should.have.property("_id");
          //response.body.should.have.property("name");
          //response.body.should.have.property("password");
          done();
        });
    });
  });
  describe("POST /api/user/register with error: ", () => {
    it("should receive an error", (done) => {
      const user = {
        email: "pbenavente@gmail.com",
        password: "qwertyijkds",
      };
      chai
        .request(url)
        .post("/api/user/register")
        .send(user)
        .end((err, response) => {
          //console.log(res.body);
          response.should.have.status(400);
          done();
        });
    });
  });
  describe("POST /api/user/register", () => {
    it("It should POST user register", (done) => {
      const user = {
        name: "Pedro Benavente",
        email: "pbenaventteeee@gmail.com",
        password: "qwertyijkds",
      };
      chai
        .request(url)
        .post("/api/user/register")
        .send(user)
        .end((err, response) => {
          response.should.have.status(400);
          response.body.should.be.a("object");
          //response.body.should.have.property("_id");
          //response.body.should.have.property("name");
          //response.body.should.have.property("password");
          done();
        });
    });
  });
  /**
   * Test the POST Login Route
   */
});
