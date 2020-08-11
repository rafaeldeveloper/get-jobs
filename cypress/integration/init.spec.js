describe('Cypress', () => {

    beforeEach(() => {
        cy.visit('https://buscadordevagas.herokuapp.com')
    })


    it('List is Loading?', () => {
        cy.wait(5000)
        cy.get('.cards')
            .first()
            .click()
    })

    it('Click on card is working?', () => {
        cy.wait(5000)
        cy.get('.cards')
            .first()
            .click()
        cy.location('pathname').should('eq', '/vacancy/detail')

    })

    it('Modal is open on Click?', () => {
        cy.wait(5000)
        cy.get('.plus')
            .first()
            .click()

    })

    it('adds a new vacancy', () => {

        cy.wait(5000)
        cy.get('.plus')
            .first()
            .click()

        cy.wait(1000)
        cy.get('.field').eq(0).type('Programador');
        cy.get('.field').eq(1).type('Nkey');
        cy.get('.field').eq(2).type('A combinar');
        cy.get('.field').eq(3).type('Remoto');
        cy.get('.field').eq(4).type('Desenvolverdor');
        cy.get('button').eq(1).click()



    })

})


