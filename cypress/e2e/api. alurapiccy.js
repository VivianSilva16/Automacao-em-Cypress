    //   describe('Teste API', () => {
   //     it('Dados da API', () => {
   //     cy.request({
   //       method: 'POST', 
   ///        url : 'http://localhost:3000/user/login', 
   //        body:  Cypress.env()  // corpo da requisição (o que eu quero que ele faça)
   //      }) .then((res) =>  {
   //         expect(res.status).to.be.equal(200)
   //         expect(res.body).is.not.empty // precisa retornar algo, nao pode estar vazio 
   //         expect(res.body).to.have.property('id') // verificar o id do usuario como resposta da requisição
   //        expect(res.body.id).to.be.equal(4) // o id precisa ser igual o que gerou no login, do usuario 4
   //       })
                
   //     })
   //    })
  
   describe('Api Alurapic', () => {

      // código comentado omitido…
      
          it('Fotos do usuário', () => {
              cy.request({
                  method: 'GET' ,
                  url: 'http://localhost:3000/carowl/photos'
              }).then((res) => {
                  expect(res.status).to.be.equal(200)
                  expect(res.body).is.not.empty
                  expect(res.body[0]).to.have.property('description')
                  expect(res.body[0].description).to.be.equal('porquinho')// ele vai chamar a foto do porquinho
                  
              })
          })
      })
      