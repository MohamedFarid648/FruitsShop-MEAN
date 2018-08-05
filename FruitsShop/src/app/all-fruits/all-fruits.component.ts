import 'rxjs/add/operator/map';
import {MyFruit} from '../Models/my-fruit';

import { Component, OnInit } from '@angular/core';
import{Http} from '@angular/http';
import {environment} from '../../environments/environment';
import { Route } from '@angular/router';

@Component({
  selector: 'app-all-fruits',
  templateUrl: './all-fruits.component.html',
  styleUrls: ['./all-fruits.component.css']
})
export class AllFruitsComponent implements OnInit {


  IsLoaded=false;x:number;
  public Clients:Array<any> | null | undefined=[];
  public Fruits:Array<any>=[]
  public MyFruitObj:MyFruit;
  public IsUpdated:boolean=false;
  public Counter:number=0;
  constructor(private FruitsServiceObj:Http) { 
  
  }
  
    ngOnInit() {
  
  const ListProductPath=environment.listProductUrl;
  console.log(`ListProductPath is ${ListProductPath}`);
  
  this.FruitsServiceObj.get(ListProductPath).
       
        map((response) => response.json()).
        subscribe( (data) => {this.displaydata(data); })
  }
    
    
    displaydata(data) {this.Fruits = data;}
  
  
    DeleteButton(id){

 
                 //this.router.redirectTo="/dddd";
 
 
    }
  
  
  
  
}  