import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFruitsComponent } from './all-fruits.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FruitsService } from '../Services/fruits.service';

import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


export class MockFruitsService {
    

  getAllFruits(path:string):Observable<object>{
    let TestData=[{"Name":"apples","Price":"40","Id":2,"Description":"Desc3","Quantity":456,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    {"Name":"lemon","Price":"10","Id":4,"Description":"Desc4","Quantity":4,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    {"Name":"strawperry","Price":50,"Id":6,"Description":"Desc60000","Quantity":400,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    {"Name":"AngularTest","Price":40,"Id":45,"Description":"csx","Quantity":43,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    {"Name":"Apples2","Price":30,"Id":100,"Description":"New Fruits","Quantity":10,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    {"Name":"Apples2","Price":10,"Id":100,"Description":"","Quantity":10,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    {"Name":"Banana2","Price":50,"Id":50,"Description":"Desc","Quantity":20,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
    {"Name":"Banana69","Price":100,"Id":35,"Description":"New kind of  Banana","Quantity":1500,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"}];

        return  new Observable(observer=>{

          observer.next(TestData);
          observer.complete();
        })

                 
  }


}


describe('AllFruitsComponent', () => {
  let component: AllFruitsComponent;
  let fixture: ComponentFixture<AllFruitsComponent>;
  let fruitsService:FruitsService;
  const fakeActivatedRoute={
    snapshot:{data:{},url:{},fragment:{}}
} as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFruitsComponent ],
      providers:[
      //  {provide:FruitsService,useValue:MockFruitsService},
        
        HttpClient,HttpHandler,{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFruitsComponent);
    component = fixture.componentInstance;
   // fixture.debugElement.injector.get(HttpClient);
    fixture.detectChanges();

    fruitsService=TestBed.get(FruitsService);

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('get all fruits',()=>{

      let fruitsService= fixture.debugElement.injector.get(FruitsService);
      fixture.detectChanges();
      fruitsService.getAllFruits(environment.listProductUrl)
      
      .subscribe((data:Array<any>)=>{

        expect(component.Fruits).toEqual(data);    

      },(error) => {
        console.log(error);
        });
  })


 
});
