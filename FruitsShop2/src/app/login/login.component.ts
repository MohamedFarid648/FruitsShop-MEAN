import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../Services/local-storage.service';
import { Admin } from '../Models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnChanges{
  Messages="";MessageClass="alert alert-danger";
  UserEmail:string="";isEmailValid=true;
  UserPassword:string="";isPasswordValid=true;
  UserAdmin:Admin=new Admin("","","",0,"");
  constructor( private loginService:LoginService,private router:Router,private activatedRoute:ActivatedRoute,private localStorageService:LocalStorageService) {

       let emailLocalStorage=localStorageService.readText("Email");
       let userLocalStorage=localStorageService.readObject("UserInfo");
            
       if(userLocalStorage){
        this.router.navigate(["Fruits",{AdminData:JSON.stringify(userLocalStorage) }], {skipLocationChange:true,
          //queryParams: this.activatedRoute.snapshot.queryParams,
          //fragment: this.activatedRoute.snapshot.fragment,
          })
       }
   }

  ngOnInit() {
  }


  ngOnChanges(){
            
  }
 

  loginUser(){

  
    if(this.UserAdmin.Password==="" || this.UserAdmin.Password.length<5){
      this.isPasswordValid=false;
      this.Messages="User Password is required and length should be greater than 5 ";

    }
    if(this.UserAdmin.Email===""){
     this.isEmailValid=false;
     this.Messages="User Email is required";

    }
    if(this.isEmailValid && this.isPasswordValid){
      let path=environment.adminLogin;
      this.loginService.signIn(path,this.UserAdmin.Email,this.UserAdmin.Password).subscribe(

        (response)=>{
           
         this.localStorageService.writeText("Email",this.UserAdmin.Email);
         
         this.localStorageService.writeObject("UserInfo",this.UserAdmin);
         
         this.MessageClass="alert alert-success";
         this.Messages="Successfully Login ^_^ ";

         setTimeout(()=>{
                      
          this.router.navigate(["Fruits",{AdminData:JSON.stringify(response) }], {skipLocationChange:true,
            //queryParams: this.activatedRoute.snapshot.queryParams,
            //fragment: this.activatedRoute.snapshot.fragment,
            })
 
         },1000);
        

        },
        (error)=>{
          
                    console.log(error.ErrorFromServer);
        }
      );
    }
    
  }

}
