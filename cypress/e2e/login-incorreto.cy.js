describe('Página de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })


    cy.intercept('POST', 'http://localhost:3000/user/login', {
                statusCode: 400 }).as('stubPost')
    })// interação com a parte de API. StubPost e o meu dubre de testes


    it('Verifica mensagens de campos obrigatórios na página de login', () => {
        cy.contains('User name is required!').should('be.visible');
        cy.contains('Password is required!').should('be.visible');
    })
        
    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
        cy.login('carowl', '12345678')
                cy.wait('@stubPost')
    })



// implementando um duble de teste
// aqui eu estou forçando um erro na API 
