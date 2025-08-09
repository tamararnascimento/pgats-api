//Bibliotecas

const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

// Aplicação

const app = require('../../app');

//Testes

describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando uso dados válidos o retorno será 201', async () => {
            const resposta = await request(app)
                .post('/transfer')
                .send({
                    from: "tamara",
                    to: "kelly",
                    amount: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário não encontrado');

        });
    });
});