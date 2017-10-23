//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();
var mongoose = require("mongoose"),
User = require('../app/models/users');

chai.use(chaiHttp);

describe('Test', function() {
    it('/GET index.html');
    it('/GET 404');
 
    
  });
  
  it('it should GET the index.html file', (done) => {
      chai.request(server)
          .get('/index.html')
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.html;
          done();
          });
        });

it('it should return 404', (done) => {
              chai.request(server)		.get('/index2.html')
                  .end((err, res) => {
                      res.should.have.status(404);
                  done();
                  });
          });
          
 describe('/GET users', () => {

it('it should GET all the users', (done) => {
                  chai.request(server)
                      .get('/api/users')
                      .end((err, res) => {
                          res.should.have.status(200);
                          res.body.should.be.a('array');
                          res.body.length.should.be.eql(3);
                          res.body[0].should.be.a('object');
                           res.body[0].should.have.property('name');
                          res.body[0].should.have.property('email');
                          res.body[0].name.should.be.a('string');
                          res.body[0].name.should.equal('John'); 
                      done();
                      });
              });
          });

          describe('User', () => {
            beforeEach((done) => { 
                User.remove({}, (err) => {
                    done();
                });
            });
            it('it should POST a user', (done) => {
                var user = {
                    "firstName": "Jane",
                    "lastName": "Doe",
                    "email": "woo@hoo.com",
                    "password": "pass"
                }
                chai.request(server)
                    .post('/api/users')
                    .send(user)
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.body.should.have.property('firstName');
                        res.body.firstName.should.be.a('string');
                        res.body.firstName.should.equal('Jane');
                        done();
                    });
            });
        
        });