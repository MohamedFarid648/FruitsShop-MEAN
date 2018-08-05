import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {

 
IsLoaded=false;
public Clients:Array<any>=[]


  constructor(private ClientsServiceObj:HttpClient) { }

  ngOnInit() {

  this.ClientsServiceObj.get("http://localhost:7000/ListClients").
  //    map((response) => response.json()).
      subscribe( (data:Array<any>) => {
        
        this.Clients=data; 
      
      
      })
   }
  
  
   //displaydata(data) {this.Clients = data;}


   addItem(){let body={};this.ClientsServiceObj.post("",body)};//.map(success=>success.status);}

}

