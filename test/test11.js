// let server = require("../server");
// let chai = require("chai");
// let chaiHttp = require("chai-http");
// const { UserModel } = require("../model")

// // Assertion 
// chai.should();
// chai.use(chaiHttp);
// console.log("--------------------------------------");
// describe('CURD APIs', async () => {

//     // beforeEach((done) => {
//     //     UserModel.deleteMany({}, (err) => { 
//     //        done();         
//     //     });     
//     // });
//     // describe("Test GET route /", async () => {
//     //     it("It should return all user", (done) => {
//     //         chai.request(server)
//     //             .get("/")
//     //             .end((err, response) => {
//     //                 response.should.have.status(200);
//     //                 // response.body.should.be.a('array');
//     //                 // response.body.length.should.be.eql(0);
//     //                 done();
//     //             });
//     //     });
//     //     it("It should NOT return all the user", (done) => {
//     //         chai.request(server)
//     //             .get("//")
//     //             .end((err, response) => {
//     //                 response.should.have.status(404);
//     //                 done();
//     //             });
//     //     });

//     // });


//     // describe("Test POST route /", async () => {
//     //     it("It should add a user", (done) => {
//     //         chai.request(server)
//     //             .post("/signup")
//     //             .send({
//     //                 firstName: "ayushiiii",
//     //                 lastName: "patidar",
//     //                 email: "ayushi@gmail.com",
//     //                 password: "ayushi@1234"
//     //             })
//     //             .end((err, response) => {
//     //                 console.log(err);
//     //                 response.should.have.status(200);
//     //                 done();
//     //             });
//     //     });
//     //     it("It should NOT add a user", (done) => {
//     //         chai.request(server)
//     //             .post("//")
//     //             .send({
//     //                 firstName: "ayushi",
//     //                 lastName: "patidar",
//     //                 email: "ayushiiii@gmail.com",
//     //                 password: "ayushi@123"
//     //             })
//     //             .end((err, response) => {
//     //                 response.should.have.status(404);
//     //                 done();
//     //             });
//     //     });

//     // });

//     // describe("Test POST route /login", async () => {
//     //     it("It should login user", (done) => {
//     //         chai.request(server)
//     //             .post("/login")
//     //             .send({
//     //                 email: "ayushi@gmail.com",
//     //                 password: "ayushi@1234"
//     //             })
//     //             .end((err, response) => {
//     //                 response.should.have.status(200);
//     //                 done();
//     //             });
//     //     });
//     //     it("It should NOT login user", (done) => {
//     //         chai.request(server)
//     //             .post("//")
//     //             .send({
//     //                 email: "xyz@gmail.com",
//     //                 password: "xyz@123"
//     //             })
//     //             .end((err, response) => {
//     //                 response.should.have.status(404);
//     //                 done();
//     //             });
//     //     });

//     // });

//     describe("Test GET route /:id", async () => {
//         let user = new UserModel({ email: "The Lord of the Rings", firstName: "J.R.R. Tolkien", lastName: "pat", pages: 1170 });
//         // it("It should single user", (done) => {
//         //     chai.request(server)
//         //         .get("/login/" + "63527d6f4ad30963015b2387")
//         //         .end((err, response) => {
//         //             response.should.have.status(200);  
//         //             response.body.should.have.property('_id').eql(book.id);
//         //             done();
//         //         });
//         // });
//         // it("It should NOT a single user", (done) => {
//         //     chai.request(server)
//         //         .get("//")
//         //         .end((err, response) => {
//         //             response.should.have.status(404);
//         //             done();
//         //         });
//         // });

//     });

//     describe('/GET/:id user', () => {
//         it('it should GET a user by the given id', (done) => {
//             let user = new UserModel({ email: "ayushipatidar@gmail.com", firstName: "J.R.R. Tolkien", lastName: "patidar", password: "Ayushi@123" });
//             user.save((err, user) => {
//                 chai.request(server)
//                     .get('/' + user.id)
//                     .send(user)
//                     .end((err, res) => {
//                         res.should.have.status(200);
//                         res.body.should.be.a('object');
//                         res.body.should.have.property('message').eql("Get User details");
//                         res.body.should.have.property('firstName');
//                         res.body.should.have.property('lastName');
//                         res.body.should.have.property('password');
//                         res.body.should.have.property('_id').eql(user.id);
//                         done();
//                     });
//             });
//         });
//     });

// })