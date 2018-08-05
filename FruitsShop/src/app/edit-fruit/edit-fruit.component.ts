import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyFruit } from '../Models/my-fruit';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { isNumber } from 'util';

@Component({
  selector: 'app-edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit {
    IsUpdated=true;
    MyFruitObj:MyFruit;
    fruitId:number;
  
    constructor(private router: ActivatedRoute,private FruitsServiceObj:Http) { 
    
        //https://alligator.io/angular/query-parameters/
  
        console.log(router.params.subscribe(parameters=>{
          
           this.fruitId=parseInt(parameters["id"]);
           if(isNumber(this.fruitId)){
                     this.getProduct(this.fruitId);
          }
            
        
        }));
    
  
  
    }
  
    ngOnInit() {
    }
  
  
    getProduct (id){    
  
      //this.MyFruitObj=new MyFruit(parseInt(ProductData.Id),ProductData.Name,parseInt(ProductData.Price),ProductData.Description,parseInt(ProductData.Quantity),ProductData.imgUrl);
      const getProductPath=environment.getProduct;
      console.log(`getProductPath is ${getProductPath}`);
      this.FruitsServiceObj.get(getProductPath+id).map((response) => response.json()).subscribe( (data) => {
        
        this.displaydata(data);        
      
      })
    }
    
    
  
  
  displaydata(data) {this.MyFruitObj = data;}
  
  

  SaveProduct (ProductData){

    debugger;
    this.MyFruitObj.imgUrl="https://homepages.cae.wisc.edu/~ece533/images/fruits.png";
    const UpdatePath=environment.updateProductUrl;
    console.log(`UpdatePath is ${UpdatePath}`);
    this.FruitsServiceObj.put(UpdatePath+this.MyFruitObj.Id,this.MyFruitObj).subscribe(res=>{
     debugger;
     console.log(res.json());
     if(res.ok)
     alert("success updating");
   },error=>{
  console.log(error);
  
   });
   
  
   
    this.IsUpdated=false;
    
  }

}




