const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const { UserModel } = require("../model");
const server = require("../server");

chai.should();
chai.use(chaiHttp);

beforeEach((done) => {
    UserModel.deleteMany({}, function (err) {
    })
    done();
})
afterEach((done) => {
    UserModel.deleteMany({}, function (err) { });
    done();
});
describe("user workflow test", () => {
    it("user should register,login, get details and update profile ", (done) => {
        let user = {
            firstName: "ayushi",
            lastName: "patidar",
            email: "abhi123@gmail.com",
            password: "ayushi@#123",
        }
        chai.request(server)
            .post("/signup")
            .send(user)
            .end((err, res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).to.be.a("object")
                let data = res.body.data
                chai.request(server)
                    .post("/login")
                    .send({
                        email: "abhi123@gmail.com",
                        password: "ayushi@#123",
                    })
                    .end((err, res) => {
                        expect(res.status).to.be.equal(200)
                        chai.request(server)
                            .get("/" + data._id)
                            .end((err, res) => {
                                expect(res.status).to.be.equal(200);
                                chai.request(server)
                                    .get("/")
                                    .end((err, res) => {
                                        expect(res.status).to.be.equal(200);
                                        chai.request(server)
                                            .put("/" + data._id)
                                            .send({
                                                firstName: "ayushi1",
                                                lastName: "patidar1",
                                                email: "ayushiii123@gmail.com",
                                                password: "ayushi@#123",
                                            })
                                            .end((err, res) => {
                                                expect(res.status).to.be.equal(200);
                                                done();
                                            });
                                    });
                            });
                    });
            });
    });

    it("user should register", (done) => {
        let user = {
            firstName: "ayushi",
            lastName: "patidar",
            email: "abhi123@gmail.com",
            password: "ayushi@#123",
        }
        chai.request(server)
            .post("/signup")
            .send(user)
            .end((err, res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).to.be.a("object")
            });
    });
})