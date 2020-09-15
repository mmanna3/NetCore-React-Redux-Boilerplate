//hacer logout y login fallido

describe('Login', () => {

    it('Exitoso', () => {
        
        acceder();        
        
        irAlCalendario();

        cy.contains('h1', 'Calendario')
            .should("be.visible")
    })
})

const acceder = () => {
    cy.visit('/');

    cy.get('[name="username"]')
        .type('yo');

    cy.get('[name="password"]')
        .type('123');

    cy.get('[type="submit"]')
        .click();
}

const irAlCalendario = () => {
    cy.contains('a', 'Calendario')
    .click()
}