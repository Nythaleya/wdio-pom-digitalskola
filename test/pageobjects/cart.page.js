import Page from "./BaseUrl.js";

class CartPage extends Page{
    open(path){
        return super.open("cart.html");
    }

    get ItemAdded(){
        return $('div[data-test="inventory-item"]');
    }

    async ValidateCart(){
        expect(this.ItemAdded).toBeDisplayed();
    }
}

export default new CartPage;