const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

  describe('Testando a API Chocolates', function () {
    describe('Usando o método GET em /chocolates/total', function () {
        it('Retornando total de chocolates', async function () {
              const response = await chai
              .request(app)
              .get('/chocolates/total');
              expect(response.status).to.be.equal(200);
              expect(response.body).to.deep.equal({ totalChocolates: 4 });
      });
    });
  });