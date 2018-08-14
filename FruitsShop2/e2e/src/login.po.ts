import {browser,by,element} from 'protractor';

export class Login{

   
    navigateTo(){
        browser.get('/Login');

    }
    
    get UserEmail(){
        return  element(by.name("email"));
    }
    get UserPassword(){
        return  element(by.name("password"));
    }
    get LoginButton(){
        return  element(by.tagName("button"));
    }
    get LoginMessages(){
        return  element(by.id("login_messages"));
    }


    get EmailRequiredMessages(){
        return  element(by.id("email_required"));
    }

    get PasswordRequiredMessages(){
        return  element(by.id("pass_required"));
    }
    
    signIn(email,pass){

         this.UserEmail.sendKeys(email);//write text on the input
         this.UserPassword.sendKeys(pass);//write text on the input
         this.LoginButton.click();
         
    }

}