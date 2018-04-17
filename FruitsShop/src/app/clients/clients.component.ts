import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

 
IsLoaded=false;
public Clients:Array<any>=[]


  constructor(private ClientsServiceObj:Http) { }

  ngOnInit() {

this.ClientsServiceObj.get("http://localhost:7000/ListClients").
      map((response) => response.json()).
      subscribe( (data) => {this.displaydata(data); })
   }
  
  
   displaydata(data) {this.Clients = data;}


   addItem(){let body={};this.ClientsServiceObj.post("",body).map(success=>success.status);}

}

