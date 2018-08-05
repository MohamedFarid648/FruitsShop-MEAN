import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyFruit } from '../Models/my-fruit';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { isNumber } from 'util';

@Component({
  selector: 'app-edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit {
    IsLoaded=true;
    MyFruitObj:MyFruit;
    fruitId:number;
  
    constructor(private router: ActivatedRoute,private FruitsServiceObj:HttpClient) { 
    
        //https://alligator.io/angular/query-parameters/
  
        console.log(router.params.subscribe(parameters=>{
          
           this.fruitId=parseInt(parameters["id"]);
           if(isNumber(this.fruitId)){
                     this.getProduct(this.fruitId);
          }
            
        
        }));
    //{doctor_firstname:"Ahmed",doctor_lastname:"",doctor_address:"",doctor_cc:"",doctor_specialty:"",survey_time:"",medicine_name:""}
  
  
    }
  
    ngOnInit() {
    }
  
  
    getProduct (id){    
  
      //this.MyFruitObj=new MyFruit(parseInt(ProductData.Id),ProductData.Name,parseInt(ProductData.Price),ProductData.Description,parseInt(ProductData.Quantity),ProductData.imgUrl);
      const getProductPath=environment.getProduct;
      console.log(`getProductPath is ${getProductPath}`);
      this.FruitsServiceObj.get(getProductPath+id)
      
      
      //.map((response) => response.json())
      
      
      .subscribe( (data:MyFruit) => {
        
        //this.displaydata(data);        
        this.MyFruitObj = data;
        if(this.MyFruitObj.Id===undefined){
             
              this.IsLoaded=false;
              location.assign("/");
                 
        }
      
      })
    }
    
    
  
  
  displaydata(data) {this.MyFruitObj = data;}
  
  

  SaveProduct (ProductData){

    this.MyFruitObj.imgUrl="https://homepages.cae.wisc.edu/~ece533/images/fruits.png";
    const UpdatePath=environment.updateProductUrl;
    console.log(`UpdatePath is ${UpdatePath}`);
    this.FruitsServiceObj.put(UpdatePath+this.MyFruitObj.Id,this.MyFruitObj).subscribe(res=>{
     console.log(this.MyFruitObj);
     alert("success updating");
   },error=>{
  console.log(error);
  
   });
   
  
   
    
  }


  
  DeleteButton(id){

    
    let wantToDelete=confirm("Are you want to delete this Product ? ");
  
    if(wantToDelete==true){
              console.log("id:"+id);
              let Obj={"Id":id};
              const DeletePath=environment.deleteProductUrl;
              console.log(`DeletePath is ${DeletePath}`);
             this.FruitsServiceObj.
             delete(DeletePath+id).subscribe(res=>{
               alert("success deleting ");
               location.assign("/");
              },error=>{
            console.log(error);
            
             });
    }


  }

}




