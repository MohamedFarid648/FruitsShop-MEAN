import { TestBed, inject } from '@angular/core/testing';

import { FruitsService } from './fruits.service';
import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
describe('FruitsService', () => {
let httpClient:HttpClient;
let httpTestingController:HttpTestingController;
let fruitsService:FruitsService;
let TestData:any[];




  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],/*HttpClientTestingModule add HttpClient , HttpTestingController to providers  */
      providers: [FruitsService]
    });

  // Inject the http service and test controller for each test
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    fruitsService=TestBed.get(FruitsService);
     TestData=[{"Name":"apples","Price":"40","Id":2,"Description":"Desc3","Quantity":456,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
                {"Name":"lemon","Price":"10","Id":4,"Description":"Desc4","Quantity":4,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
                {"Name":"strawperry","Price":50,"Id":6,"Description":"Desc60000","Quantity":400,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
                {"Name":"AngularTest","Price":40,"Id":45,"Description":"csx","Quantity":43,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
                {"Name":"Apples2","Price":30,"Id":100,"Description":"New Fruits","Quantity":10,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
                {"Name":"Apples2","Price":10,"Id":100,"Description":"","Quantity":10,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
                {"Name":"Banana2","Price":50,"Id":50,"Description":"Desc","Quantity":20,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"},
                {"Name":"Banana69","Price":100,"Id":35,"Description":"New kind of  Banana","Quantity":1500,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"}];
 

  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
  //httpTestingController.verify();
  });

  it('should be created', inject([FruitsService], (service: FruitsService) => {
    expect(service).toBeTruthy();
  }));


  it('Get All Fruits_One Request',()=>{
    


    fruitsService.getAllFruits(environment.listProductUrl).subscribe(data=>{

              expect(data).toEqual(TestData);
              expect(data["length"]).toEqual(8);



    },(error)=>{
     console.log("Error from Get All Fruits :")
      console.log(error);
    })


        
      // FruitsService should have made one request to GET fruits from expected URL
      /*The following `expectOne()` will match the request's URL.
        If no requests or multiple requests matched that URL
       `expectOne()` would throw.*/
      const req=httpTestingController.expectOne(environment.listProductUrl);
      expect(req.request.method).toEqual('GET');
     
  
     // Respond with mock data, causing Observable to resolve.
     // Subscribe callback asserts that correct data was returned.

      req.flush(TestData);
 
  });


  it('Returning No Fruits', () => {

    fruitsService.getAllFruits(environment.listProductUrl).subscribe(
      data => expect(data["length"]).toEqual(0, 'should have empty heroes array'),
      fail
    );

    const req = httpTestingController.expectOne(environment.listProductUrl);
   // req.flush([{},{},{}]);//Error: Expected 3 to equal 0.
      req.flush([]); // Respond with no Fruits  
  });


  it('Returning No Fruits 404', () => {

    fruitsService.getAllFruits(environment.listProductUrl).subscribe(
      data => expect(data["length"]).toEqual(0, 'should have empty heroes array'),
      fail=>{
        console.log("Returning No Fruits 404");
        console.log(fail);
      
      
      }
    );

    const req = httpTestingController.expectOne(environment.listProductUrl);
   // req.flush([{},{},{}]);//Error: Expected 3 to equal 0.
      req.flush('404 error',{status:404,statusText:'Notfound'}); // Respond with no Fruits  
  });


  it('Get All Fruits_Multiple Requests',()=>{
    


    fruitsService.getAllFruits(environment.listProductUrl).subscribe(data=>{

      expect(data["length"]).toEqual(0);

    });
    fruitsService.getAllFruits(environment.listProductUrl).subscribe(data=>{

      expect(data["length"]).toEqual(3);

    });
    fruitsService.getAllFruits(environment.listProductUrl).subscribe(data=>{

              expect(data).toEqual(TestData);
              expect(data["length"]).toEqual(8);



    },(error)=>{
     console.log("Error from Get All Services :")
      console.log(error);
    })


        
      // FruitsService should have made one request to GET heroes from expected URL
      const requests=httpTestingController.match(environment.listProductUrl);
      expect(requests.length).toEqual(3,'Calls ');
     
  
      requests[0].flush([]);
      requests[1].flush([{},{},{}]);
      requests[2].flush(TestData);

     // expect(httpClient.get.calls.count()).toEqual(1);

 
  });


   
  it('Updating Fruits', () => {
    
  let UpdatedProduct={"Name":"lemon","Price":100,"Id":4,"Description":"Desc4","Quantity":4,"imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/fruits.png"};
               

    fruitsService.editFruit(environment.updateProductUrl+4,UpdatedProduct).subscribe(
      data => expect(data["length"]).toEqual(8),
      fail=>{
        console.log("Updating Fruits:");
        console.log(fail);
      
      
      }
    );

    const req = httpTestingController.expectOne(environment.updateProductUrl+4);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(UpdatedProduct);


   // Expect server to return the hero after PUT
   const expectedResponse = new HttpResponse(
    { status: 200, statusText: 'OK', body: TestData });
  req.event(expectedResponse);

  });
  



  it('Deleting Fruits', () => {                 
  
      fruitsService.deleteFruit(environment.deleteProductUrl+"4").subscribe(
        data => expect(data["length"]).toEqual(8),
        fail=>{
          console.log("Deleting Fruits:");
          console.log(fail);
        
        
        }
      );
  
      const req = httpTestingController.expectOne(environment.deleteProductUrl+4);
      expect(req.request.method).toEqual('DELETE');
     // expect(req.request.body).toEqual(UpdatedProduct);
  
  
     // Expect server to return the hero after PUT
     const expectedResponse = new HttpResponse(
      { status: 200, statusText: 'OK', body: TestData });
    req.event(expectedResponse);
  
    });
    
  
    it('Get All Fruits_One Request2',()=>{
    


      fruitsService.getAllFruits(environment.listProductUrl).subscribe(data=>{
  
                expect(data).toEqual(TestData);
                expect(data["length"]).toEqual(8);
  
  
  
      },(error)=>{
       console.log("Error from Get All Services :")
        console.log(error);
      })
  
  
          
        // FruitsService should have made one request to GET heroes from expected URL
        const req=httpTestingController.expectOne(environment.listProductUrl);
        expect(req.request.method).toEqual('GET');
       
    
        req.flush(TestData);
  
       // expect(httpClient.get.calls.count()).toEqual(1);
  
   
    });

    

});
