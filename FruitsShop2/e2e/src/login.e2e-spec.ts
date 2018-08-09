import {browser,by,element} from 'protractor';
import { Login } from './login.po';
import { AllFruits } from './fruits.pro';

import { protractor } from 'protractor/built/ptor';



describe('loginPage with Page Object',()=>{

    let LoginPage=new Login();
    const ExpectedConditions=protractor.ExpectedConditions;
    beforeEach(()=>{
               
        LoginPage.navigateTo();        
    })

    it('Email is Requird',()=>{

  
        LoginPage.signIn('','123456');
        browser.wait(ExpectedConditions.visibilityOf(LoginPage.EmailRequiredMessages));
        expect(LoginPage.EmailRequiredMessages.getText()).toContain("Email is required");
  
    });



    it('Password is Requird',()=>{

  
        LoginPage.signIn('ahmed@gmail.com','');
        browser.wait(ExpectedConditions.visibilityOf(LoginPage.PasswordRequiredMessages));
        expect(LoginPage.PasswordRequiredMessages.getText()).toContain("Password is required");
  
    });

    it('success login',()=>{
                  
        LoginPage.signIn('ahmed@gmail.com','12345');
        //let fruitsPage=new AllFruits();
        //browser.wait(ExpectedConditions.visibilityOf(fruitsPage.firsth));
       // expect(fruitsPage.firsth.getText()).toContain("All Fruits");
  

    })

  
 
})


/*
xdescribe('Login Page',()=>{


    let userEmail= element(by.name("email"));
    let userPassword= element(by.name("password"));
    let loginButton=element(by.tagName("button"));
    let login_messages=element(by.id("login_messages"));
    const ExpectedConditions=protractor.ExpectedConditions;
    beforeEach(()=>{
               
          browser.get('/Login');
        
    })

    it('Email is Requird',()=>{

  
        //userEmail.sendKeys("ahmed@gmail.com");
        userPassword.sendKeys("12345");
        loginButton.click();
       // browser.wait(ExpectedConditions.visibilityOf(email_required));
       // expect(login_messages.getText()).toContain("User Email is required");
 
       //element(userEmail).getText();
    });



    it('Password is Requird',()=>{

  
        //userEmail.sendKeys("ahmed@gmail.com");
        userPassword.sendKeys("12345");
        loginButton.click();
       // browser.wait(ExpectedConditions.visibilityOf(login_messages));
       // expect(login_messages.getText()).toContain("User Password is required ");
 
       //element(userEmail).getText();
    });

    it('success login',()=>{
                  
              userEmail.sendKeys("ahmed@gmail.com");
              userPassword.sendKeys("12345");
              loginButton.click();
             // expect(login_messages.getText()).toContain("Successfully Login ^_^");

             // browser.wait(ExpectedConditions.visibilityOf(""));


             //element(userEmail).getText();

    })

  

});
*/