import { PurchaseElements } from "./purchase.elements";

export class PurchaseMethods{
    static clickOnOkButton(){
        PurchaseElements.buttons.okButton.click();
    };

    static verifyPurchaseIcon(){
        PurchaseElements.purchaseIcon.greenIcon.should('exist');
    }
    
}