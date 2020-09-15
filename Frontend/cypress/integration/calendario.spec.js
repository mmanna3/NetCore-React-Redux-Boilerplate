import "cypress-localstorage-commands";

/*
No puedo seleccionar camas ya reservadas ese día
    una cama
    3 camas

Puedo reservar más de 2 días
    una cama
    2 camas
    3 camas

MOVIMIENTO HACIA ARRIBA
        Al moverme hacia la celda de arriba, se deselecciona(n) la(s) celda(s) del día actual
            Durante reserva de una cama
            Durante reserva de 3 camas

MOVIMIENTO HACIA LA IZQUIERDA

No puedo seleccionar en la misma reserva camas de distintas habitaciones

*/

before(() => {
    cy.login();
    cy.saveLocalStorage();
  });
  
beforeEach(() => {
    cy.restoreLocalStorage();
    cy.visit('/calendario')
});

describe('Poder reservar un día', () => {

    it('Una cama', () => {
        getCeldaCypress({col: 0, row: 0})
            .click();
        
        getCeldaCypress({col: 0, row: 0})
            .invoke('attr', 'class')
            .should('contain', 'selected')
            .should('contain', 'firstSelected')
            .should('contain', 'lastSelected')
            ;
        
        alHacerHoverLaCeldaNoSeSelecciona({col: 0, row: 1});
    })

    xit('3 camas', () => {
    })
})

describe('Poder reservar 3 días', () => {

    it('Una cama', () => {
        seleccionarDesdeHasta({row:0,col:0},{row:2,col:0});

        queEstenSeleccionadasDesdeHasta({row:0,col:0},{row:2,col:0});
        queNoEsteSeleccionada(({row:0,col:1}));
    })

    xit('3 camas', () => {
    })
})

describe('No puedo reservar un día ya reservado', () => {

    xit('Una cama', () => {       
        
    })

    xit('3 camas', () => {
    })
})

const seleccionarDesdeHasta = (celdaInicial, celdaFinal) => {    
    
    var celdasIntermedias = celdasEntre(celdaInicial, celdaFinal);        

    getCeldaCypress(celdaInicial)
        .trigger('mouseover')
        .trigger('mousedown', {which: 1})
        .trigger('mousemove')        

    celdasIntermedias.forEach(celda => {
        getCeldaCypress(celda)
            .trigger('mouseover')
            .trigger('mousemove')
    });

    getCeldaCypress(celdaFinal)
        .trigger('mousemove')
        .trigger('mouseup', {force: true})
}

function getCeldaCypress(celda) {
    return cy.get(`[row="${celda.row}"][column="${celda.col}"]`);
}


const queNoEsteSeleccionada = (celda) => {
    getCeldaCypress(celda)
        .invoke('attr', 'class')
        .should('not.contain', '_selected');
}

function queEstenSeleccionadasDesdeHasta(celdaInicial, celdaFinal) {
    
    var celdasIntermedias = celdasEntre(celdaInicial, celdaFinal);        

    getCeldaCypress(celdaInicial)
        .invoke('attr', 'class')
        .should('contain', 'selected')
        .should('contain', 'firstSelected');

    celdasIntermedias.forEach(celda => {
        getCeldaCypress(celda)
            .invoke('attr', 'class')
            .should('contain', 'selected');
    });

    getCeldaCypress(celdaFinal)
        .invoke('attr', 'class')
        .should('contain', 'selected')
        .should('contain', 'lastSelected');

}

function celdasEntre(celdaInicial, celdaFinal) {
    
    var result = [];
    var i = parseInt(celdaInicial.row) + 1;

    while (i < parseInt(celdaFinal.row)) {
        result.push({
                        col: celdaInicial.col, 
                        row: i
                    });
        i++;            
    }
    
    return result;
}

function alHacerHoverLaCeldaNoSeSelecciona(celda){
    getCeldaCypress(celda)
            .trigger('mouseover')
            .trigger('mousemove')

        getCeldaCypress(celda)
            .invoke('attr', 'class')
            .should('not.contain', '_selected')
            ;
}