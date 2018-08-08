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
  public Fruits:Array<any>=[]
  constructor(private FruitsServiceObj:FruitsService) { 
  
  }
  
  ngOnInit() {
  
  const ListProductPath=environment.listProductUrl;
  console.log(`ListProductPath is ${ListProductPath}`);
  
  this.FruitsServiceObj.getAllFruits(ListProductPath).
       
      //  map((response) => response.json()).
        subscribe( (data:Array<any>) => {
          
        //this.displaydata(data);
        this.Fruits=data;
        
        })
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