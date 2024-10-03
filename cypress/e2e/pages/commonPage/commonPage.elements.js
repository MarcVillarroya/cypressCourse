export class CommonPageElements{
    static get topLinks(){
        return{
            get home(){
                return cy.get('li.active a')
            },
            get contact(){
                return cy.get('a[data-target="#exampleModal"]')
            },
            get about(){
                return cy.get('a[data-target="#videoModal"]')
            },
            get cart(){
                return cy.get('a#cartur')
            },
            get login(){
                return cy.get('a[data-target="#logInModal"]')
            },
            get signup(){
                return cy.get('a[data-target="#signInModal"]')
            },
            get logout(){
                return cy.contains('a', 'Log out')
            }
            
        }
    }

    
}