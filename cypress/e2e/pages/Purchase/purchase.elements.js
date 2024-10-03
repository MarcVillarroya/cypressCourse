export class PurchaseElements{
    static get buttons(){
        return{
            get okButton(){
                return cy.contains('button', 'OK')
            }
        };
    }
    static get purchaseIcon(){
        return{
            get greenIcon(){
                return cy.get('.sa-success')
            }
        }
    }
    
}