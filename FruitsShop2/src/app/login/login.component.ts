import { Component, OnInit, OnChanges } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnChanges{
  Messages="";MessageClass="alert alert-danger";
  UserEmail:string="";isEmailValid=true;
  UserPassword:string="";isPasswordValid=true;
  constructor( private loginService:LoginService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }


  ngOnChanges(){
debugger;
            
  }
 

  loginUser(){

               
    if(this.UserPassword==="" || this.UserPassword.length<5){
      this.isPasswordValid=false;
      this.Messages="User Password is required and length should be greater than 5 ";

    }
    if(this.UserEmail===""){
     this.isEmailValid=false;
     this.Messages="User Email is required";

    }
    if(this.isEmailValid && this.isPasswordValid){
      let path=environment.adminLogin;
      this.loginService.signIn(path,this.UserEmail,this.UserPassword).subscribe(

        (response)=>{
           
          
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
