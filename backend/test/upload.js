let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../main');
let should = chai.should();
const path = require('path');

chai.use(chaiHttp);


describe('Upload', () => {

  let hashToTest = '';

  describe('/upload Photo', () => {
    it('it should upload file', (done) => {
      chai.request(server)
        .post('/api/upload')
        .type('form')
        .attach('profilePicture', path.join(__dirname, './mockfiles/user-img.png'))
        .end((err, res) => {
          res.body.should.have.property('profilePicture');
          hashToTest = res.body.profilePicture;
          done();
        });
    });
  });

  describe('get profile image', () => {
    it('it should return image from valid url', (done) => {
      chai.request(server)
        .get(`/images/profile/${hashToTest}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.header.should.have.property('content-type').eql('image/png')
          done();
        });
    });
  });

});