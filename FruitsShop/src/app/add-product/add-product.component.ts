import 'rxjs/add/operator/map';
import {MyFruit} from '../my-fruit';

import { Component, OnInit } from '@angular/core';
import{Http} from '@angular/http';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
public MyFruitObj:MyFruit;
  constructor(private AddFruitService:Http) { 

     this.MyFruitObj=new MyFruit();

  }

  ngOnInit() {
  }
SubmitForm(ProductData){
  //debugger;
 this.MyFruitObj.Id=ProductData.Id;
 this.MyFruitObj.Name=  ProductData.Name;
 this.MyFruitObj.Description=ProductData.Description;
 this.MyFruitObj.Price=ProductData.Price;
 this.MyFruitObj.Quantity=ProductData.Quantity;
 this.MyFruitObj.imgUrl=ProductData.imgUrl;
 this.AddFruitService.post("http://localhost:7000/AddProduct",this.MyFruitObj).
 map(function(success){
   debugger;
   success.status;
 console.log("Success");
 }
 
 
 );
 

 

}
/*createArticle(article: Article):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.articleUrl, article, options)
        .map(success => success.status)
        .catch(this.handleError);
}*/


}
