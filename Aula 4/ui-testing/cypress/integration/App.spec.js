describe('App Developers Skills', () => {
    const inputSkill = 'Any Skill Name'
    const inputDev = 'Any Developers'
    const inputTec = 'Any Technologies'
    const inputRoles = 'Any Roles'

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('Skill Name Input accepts value', () => {
        cy.get('#input-skill').type(inputSkill).should('have.value', inputSkill)
    });

    it('Developers Input accepts value', () => {
        cy.get('#input-developer').type(inputDev).should('have.value', inputDev)
    });

    it('Technologies Input accepts value', () => {
        cy.get('#input-tec').type(inputTec).should('have.value', inputTec)
    });

    it('Roles Input accepts value', () => {
        cy.get('#input-roles').type(inputRoles).should('have.value', inputRoles)
    });

    it('should add skill as the button is clicked', () => {
        cy.get('#input-skill').type(inputSkill)
        cy.get('#input-developer').type(inputDev)
        cy.get('#input-tec').type(inputTec)
        cy.get('#input-roles').type(inputRoles)
        cy.get('#add-skill-button').click()

        cy.get('#input-skill').should('have.value', '')
        cy.get('#input-developer').should('have.value', '')
        cy.get('#input-tec').should('have.value', '')
        cy.get('#input-roles').should('have.value', '')
        cy.get('li').should('be.visible')
        cy.get('ul').should('be.visible')

    })
})