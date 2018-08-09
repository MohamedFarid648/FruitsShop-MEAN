import {MyFruit} from '../Models/my-fruit';
import { Component, OnInit,
         OnChanges, OnDestroy,
         SimpleChanges , DoCheck,
         AfterContentInit, AfterContentChecked,
         AfterViewInit, AfterViewChecked,
} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { FruitsService } from '../Services/fruits.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-fruits',
  templateUrl: './all-fruits.component.html',
  styleUrls: ['./all-fruits.component.css']
})
export class AllFruitsComponent implements 

OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  public Fruits:Array<any>=[];
  isCompleted=false;
  constructor(private FruitsServiceObj:FruitsService,private activatedRoute:ActivatedRoute) {  


/*let AdminData=activatedRoute.snapshot.params["AdminData"];
if(AdminData!==undefined){
  AdminData=JSON.parse(AdminData);
}*/

  }
  
  ngOnInit() {
  
  const ListProductPath=environment.listProductUrl;
  console.log(`ListProductPath is ${ListProductPath}`);
  
  //try{}
  this.FruitsServiceObj.getAllFruits(ListProductPath).
       
      //  map((response) => response.json()).
        subscribe( 
          (data:Array<any>) => {
            
            if(data.length>0){
              this.isCompleted=true;
              this.Fruits=data;
            }
           
            console.log("Fruits is : ");
            console.log(this.Fruits);
          
          },
       
          (error)=>{ 
            console.log("Fruits is : ");
            console.log(this.Fruits);
            console.log("Error is :");
            console.log(error);
            
          }
      
          
        
        
        )
  }
    
    
   // displaydata(data) {this.Fruits = data;}
  
  
   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }


  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

  
  
}  