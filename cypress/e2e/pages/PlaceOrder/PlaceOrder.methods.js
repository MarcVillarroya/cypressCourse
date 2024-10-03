import { PlaceOrderElements } from "./PlaceOrder.elements";

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.textboxes.name.invoke('val', name);
    }
    static insertName(country){
        PlaceOrderElements.textboxes.country.invoke('val', country);
    }
    static insertName(city){
        PlaceOrderElements.textboxes.city.invoke('val', city);
    }
    static insertName(creditCardNumber){
        PlaceOrderElements.textboxes.creditCard.invoke('val', creditCardNumber);
    }
    static insertName(month){
        PlaceOrderElements.textboxes.name.invoke('val', month);
    }
    static insertName(year){
        PlaceOrderElements.textboxes.year.invoke('val', year);
    }

    static clickOnCloseButton(){
        PlaceOrderElements.buttons.closeButton.click();
    }
    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchaseButton.click();
    }
}