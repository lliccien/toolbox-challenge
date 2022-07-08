import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'

// Assertion Style
chai.should()

chai.use(chaiHttp)

describe('Files API', () => {
  describe('GET /files/data', () => {
    it('should return all files data', (done) => {
      chai.request(app)
        .get('/files/data')
        .end((res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          done()
        })
    })

    it('should return one file data to test3.csv', (done) => {
      chai.request(app)
        .get('/files/data?fileName=test3.csv')
        .end((res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('file')
          res.body.should.have.property('lines')
          done()
        })
    })

    it('should return error when file not found', (done) => {
      chai.request(app)
        .get('/files/data?fileName=test4.csv')
        .end((res) => {
          res.should.have.status(404)
          done()
        })
    })
  })

  describe('GET /files/list', () => {
    it('should return all files list', (done) => {
      chai.request(app)
        .get('/files/list')
        .end((res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('files')
          done()
        })
    })
  })
})
