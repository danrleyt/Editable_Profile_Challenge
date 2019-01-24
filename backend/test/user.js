let mongoose = require('mongoose');
let User = require('../src/api/controllers/user');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/config/express');

chai.use(chaiHttp);

describe('Users', () =>{
  describe('/GET Users', () => {
    it('it should GET all users', (done) => {
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
