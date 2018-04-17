import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import{Http} from '@angular/http';
@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

IsLoaded=false;
public Clients:Array<any>=[]
public Fruits:Array<any>=[]


  constructor(private FruitsServiceObj:Http) { }

  ngOnInit() {

this.FruitsServiceObj.get("http://localhost:7000/ListProducts").
      map((response) => response.json()).
      subscribe( (data) => {this.displaydata(data); })
   }
  
  
   displaydata(data) {this.Fruits = data;}


   //addItem(){let body={};this.FruitsServiceObj.post("",body).map(success=>success.status);}

}
