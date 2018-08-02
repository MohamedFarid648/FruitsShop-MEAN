import 'rxjs/add/operator/map';
//import {MyFruit} from '../Models/my-fruit';
import {MyFruit} from '../Models/my-fruit';

import { Component, OnInit } from '@angular/core';
import{Http} from '@angular/http';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public MyFruitObj:MyFruit;
  constructor(private AddFruitService:Http,private RouteUrl:Router) { 


  }

  ngOnInit() {
  }
SubmitForm(ProductData){
  ProductData.imgUrl="https://homepages.cae.wisc.edu/~ece533/images/fruits.png";
    
  /*if(!Number(ProductData.Id))
        ProductData.Id=1;
  if(!Number(ProductData.Price))
        ProductData.Price=1;
  if(!Number(ProductData.Quantity))
        ProductData.Quantity=1;*/
  this.MyFruitObj=new MyFruit(parseInt(ProductData.Id),ProductData.Name,parseInt(ProductData.Price),ProductData.Description,parseInt(ProductData.Quantity),ProductData.imgUrl);
  const path=environment.addProductUrl;
 console.log(`AddProductPath is ${path}`);

  this.AddFruitService.post(path,this.MyFruitObj).subscribe(res=>{
   //debugger;
   console.log(res.json());
   if(res.ok)
   alert("Success Adding Product ^_^");
 },error=>{
console.log(error);

 });
 
   //this.RouteUrl.navigateByUrl("/Fruits");

 

}
/*createArticle(article: Article):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.articleUrl, article, options)
        .map(success => success.status)
        .catch(this.handleError);
}*/


}
