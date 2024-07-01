import Page from "./BaseUrl.js";

class DashboardPage extends Page{
    open(path){
        return super.open("inventory.html");
    }
    
    //Identifier
    get cartIcon(){
        return $("#shopping_cart_container");
    }
    get AddtoCartButton(){
        return $("#add-to-cart-sauce-labs-backpack");
    }
    get RemovefromCartButton(){
        return $("#remove-sauce-labs-backpack");
    }

    //Action
    async ValidateDashboard(){
        expect(this.cartIcon).toBeDisplayed()
    }
    async AddtoCart(){
        await this.AddtoCartButton.click();
    }
    async ValidateCart(){
        expect(this.RemovefromCartButton).toBeDisabled();
    }

}

export default new DashboardPage;