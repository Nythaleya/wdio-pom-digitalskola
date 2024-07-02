import Page from "./BaseUrl.js"
import { $ } from "@wdio/globals"

class LoginPage extends Page{
    open (path){
        return super.open("")
    }

    //Identifier
    get Username(){
        return $("#user-name")
    }
    get Password(){
        return $("#password")
    }
    get LoginButton(){
        return $("#login-button")
    }

    //Action
    async login(username,password){
        await this.Username.setValue(username);
        await this.Password.setValue(password);
        await this.LoginButton.click();
    }
}

export default new LoginPage();