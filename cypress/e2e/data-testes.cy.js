describe('Página de cadastro', () => {
   
  beforeEach (()=> {

    cy.visit('http://localhost:4200')

   }) 
  const usuarios = require ('../fixtures/usuarios.json') // se voce apertar ..e / ja oferecem os caminhos pra voce 
  
  it('Simulando varios usuarios na plataforma', () => {
      
      usuarios.forEach(usuario => { cy.get('[data-test="register"]').click();
      cy.get('input[data-test="email"]').type(usuario.email); // ele vai buscar la no JSON 
      cy.get('input[data-test="fullName"]').type(usuario.fullName);
      cy.get('input[data-test="registerUserName"]').type(usuario.userName);
      cy.get('input[data-test="registerPassword"]').type(usuario.password);
      cy.get('[data-test="btnRegister"]').click();})

     
    })
  })