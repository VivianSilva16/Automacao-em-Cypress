describe('Api Alurapic', () => {

    // código comentado omitido…
    
        it('Fotos do usuário', () => {
            cy.request({
                method: 'GET' ,
                url: 'http://loclhost:3000/carowl/photos'
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body[0]).to.have.property('description')
                expect(res.body[0].description).to.be.equal('porquinho')// ele vai chamar a foto do porquinho
                
            })
        })
    })
    
    // aqui ele nao funcionou porque esta puxando as fotos da professora e nao a minha. mas o codigo esta OK, 
    // bastando apenas trocar o login e escolher uma foto minha