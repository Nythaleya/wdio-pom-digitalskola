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
    async AddtoCart(){
        await this.AddtoCartButton.click();
    }

    //Validate
    async ValidateDashboard(){
        expect(this.cartIcon).toBeDisplayed();
    }
    async ValidateCart(){
        expect(this.RemovefromCartButton).toBeDisabled();
    }

}

export default new DashboardPage;