import {MyFruit} from '../Models/my-fruit';
import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-all-fruits',
  templateUrl: './all-fruits.component.html',
  styleUrls: ['./all-fruits.component.css']
})
export class AllFruitsComponent implements OnInit {
  public Fruits:Array<any>=[]
  constructor(private FruitsServiceObj:HttpClient) { 
  
  }
  
  ngOnInit() {
  
  const ListProductPath=environment.listProductUrl;
  console.log(`ListProductPath is ${ListProductPath}`);
  
  this.FruitsServiceObj.get(ListProductPath).
       
      //  map((response) => response.json()).
        subscribe( (data:Array<any>) => {
          
        //this.displaydata(data);
        this.Fruits=data;
        
        })
  }
    
    
   // displaydata(data) {this.Fruits = data;}
  
  
  
  
}  