export class Logger{
    static stepNumber(number){
        const text = `Step # ${number}`;
        cy.log(text)
        cy.allure().step(text)
    }

    static stepDescription(description){
        const text = `Step - ${description}`;
        cy.log(text)
        cy.allure().step(text)
    }

    static verification(description){
        const text = `Verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subStep(description){
        const text = `SubStep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

}