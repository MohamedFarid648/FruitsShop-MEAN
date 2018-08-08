import { Component, OnInit, SimpleChanges, OnChanges, ContentChild, ViewChild, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnDestroy, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyFruit } from '../Models/my-fruit';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { isNumber } from 'util';
import { FruitsService } from '../Services/fruits.service';

@Component({
  selector: 'app-edit-fruit',
  templateUrl: './edit-fruit.component.html',
  styleUrls: ['./edit-fruit.component.css']
})
export class EditFruitComponent implements OnInit , OnChanges , 
AfterContentInit ,AfterContentChecked,
AfterViewInit,AfterViewChecked ,
DoCheck,OnDestroy{

  @ContentChild("idContentChild") try_id_ContentChild:ElementRef | undefined | null;
  @ViewChild("idViewChild") try_id_ViewChild:ElementRef | undefined | null;
  @ViewChild("ProductData") ProductData :ElementRef;
    IsLoaded=true;
    MyFruitObj:MyFruit;
    fruitId:number;
  
    constructor(private router: ActivatedRoute,private FruitsServiceObj:FruitsService) { 
    
        //https://alligator.io/angular/query-parameters/
  
        console.log(router.params.subscribe(parameters=>{
          
           this.fruitId=parseInt(parameters["id"]);
           if(isNumber(this.fruitId)){
                     this.getProduct(this.fruitId);
          }
            
        
        }));
    //{doctor_firstname:"Ahmed",doctor_lastname:"",doctor_address:"",doctor_cc:"",doctor_specialty:"",survey_time:"",medicine_name:""}
     if(this.try_id_ContentChild )
     console.log("try_id_ContentChild from constructor: "+this.try_id_ContentChild.nativeElement);
     if(this.try_id_ViewChild)
     console.log("try_id_ViewChild from constructor: "+this.try_id_ViewChild.nativeElement);
     
   
    }
  
    ngOnInit() {
      console.log("ngOnInit");
    }
  
  
    getProduct (id){    
  
      //this.MyFruitObj=new MyFruit(parseInt(ProductData.Id),ProductData.Name,parseInt(ProductData.Price),ProductData.Description,parseInt(ProductData.Quantity),ProductData.imgUrl);
      const getProductPath=environment.getProduct;
      console.log(`getProductPath is ${getProductPath}`);
      this.FruitsServiceObj.getOneProduct(getProductPath+id)
      
      
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
    this.FruitsServiceObj.editFruit(UpdatePath+this.MyFruitObj.Id,this.MyFruitObj).subscribe(res=>{
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
             this.FruitsServiceObj.deleteFruit(DeletePath+id).subscribe(res=>{
               alert("success deleting ");
               location.assign("/");
              },error=>{
            console.log(error);
            
             });
    }


  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }


  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');

    if(this.try_id_ContentChild)
    console.log("try_id_ContentChild from ngAfterContentInit: "+this.try_id_ContentChild.nativeElement);
    if(this.try_id_ViewChild)
    console.log("try_id_ViewChild from ngAfterContentInit: "+this.try_id_ViewChild.nativeElement);
    
 
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
    if(this.try_id_ContentChild){
   //   console.log("try_id_ContentChild from ngAfterContentChecked: ");
    //  console.log(this.try_id_ContentChild);
      }

      if(this.try_id_ViewChild){
     // console.log("try_id_ViewChild from ngAfterContentChecked: ");
     // console.log(this.try_id_ViewChild);
      }

 
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    if(this.try_id_ContentChild)
    console.log("try_id_ContentChild from ngAfterViewInit: "+this.try_id_ContentChild.nativeElement);
    if(this.try_id_ViewChild)
    console.log("try_id_ViewChild from ngAfterViewInit: "+this.try_id_ViewChild.nativeElement);
    
    
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
   
    
    if(this.try_id_ViewChild){
  //  console.log("try_id_ViewChild from ngAfterViewChecked: ");
   // console.log(this.try_id_ViewChild.nativeElement);
  }
    if(this.ProductData){
     // console.log("ProductData from ngAfterViewChecked: ");
     // console.log(this.ProductData);
     }
  } 

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

  /*
  After every input change:
  ngDoCheck called!
  ngAfterContentChecked called!
  ngAfterViewChecked called!
  */

}




