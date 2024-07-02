import Page from "./BaseUrl.js";

class CartPage extends Page{
    open(path){
        return super.open("cart.html");
    }

    //Identifier
    get ItemAdded(){
        return $('div[data-test="inventory-item"]');
    }
    get RemovefromCartButton(){
        return $("#remove-sauce-labs-backpack");
    }

    //Action
    async RemoveFromCart(){
        await this.RemovefromCartButton.click();
    }

    //Validate
    async ValidateCart(){
        expect(this.ItemAdded).toBeDisplayed();
    }

}

export default new CartPage;