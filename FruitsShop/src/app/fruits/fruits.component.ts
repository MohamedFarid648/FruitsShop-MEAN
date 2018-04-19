import 'rxjs/add/operator/map';
import {MyFruit} from '../my-fruit';

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
public MyFruitObj:MyFruit;
public IsUpdated:boolean=false;
public Counter:number=0;
constructor(private FruitsServiceObj:Http) { }

  ngOnInit() {

this.FruitsServiceObj.get("http://localhost:7000/ListProducts").

      map((response) => response.json()).
      subscribe( (data) => {this.displaydata(data); })
   }
  
  
   displaydata(data) {this.Fruits = data;}









UpdateButton(id){

  debugger;
  this.IsUpdated=true;
  
}
SaveProduct (ProductData){

  debugger;
  ProductData.imgUrl="https://homepages.cae.wisc.edu/~ece533/images/fruits.png";
  
 /*if(!Number(ProductData.Id))
        ProductData.Id=1;
  if(!Number(ProductData.Price))
        ProductData.Price=1;
  if(!Number(ProductData.Quantity))
        ProductData.Quantity=1;*/
  this.MyFruitObj=new MyFruit(parseInt(ProductData.Id),ProductData.Name,parseInt(ProductData.Price),ProductData.Description,parseInt(ProductData.Quantity),ProductData.imgUrl);

 this.FruitsServiceObj.put('http://localhost:7000/UpdateProduct/'+ProductData.Id,this.MyFruitObj).subscribe(res=>{
   debugger;
   console.log(res.json());
   if(res.ok)
   alert("success updating");
 },error=>{
console.log(error);

 });
 

 
  this.IsUpdated=false;
  
}





DeleteButton(id){
  debugger;
  
  console.log("id:"+id);
  let Obj={"Id":id};
 this.FruitsServiceObj.
 delete('http://localhost:7000/DeleteProduct/'+id).subscribe(res=>{
   console.log(res.json());
   if(res.ok)
   alert("success deleting ");
   location.reload();
 },error=>{
console.log(error);

 });
}





}
/*


 <table class="table">
            <tr>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Action</th>
                  
                  
            </tr>

            <tr>
                <td>
                        <span contentEditable="true">{{Fruit.Price}}</span>

                       <!--  <input type="text"  value="{{Fruit.Price}}" *ngIf="IsUpdated"/>-->
                  </td>
                  <td>
                   <span contentEditable="true">{{Fruit.Quantity}}</span>

                         <!-- <input type="text"  value="{{Fruit.Quantity}}" *ngIf="IsUpdated"/>-->
                  </td>
                   <td>

                          <span   contentEditable="true" >{{Fruit.Description}}</span>

                        <!--  <input type="text"  value="{{Fruit.Description}}" *ngIf="IsUpdated"/>-->
                  </td>
                 
                  <td><input type="button" class="btn btn-danger" (click)="DeleteButton(Fruit.Id)" value="Delete">
                  <!--<input *ngIf="!IsUpdated" type="button" class="btn btn-success"  (click)="UpdateButton(Fruit.Id,Fruit.Price,Fruit.Quantity)" value="Update">-->
                  <input type="button" class="btn btn-success"  (click)="SaveButton(Fruit.Id,Fruit.Price,Fruit.Quantity,Fruit.Description)" value="Save">
                  </td>
            
            </tr>
            </table> */