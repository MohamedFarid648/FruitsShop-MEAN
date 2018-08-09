import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFruitsComponent } from './all-fruits.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FruitsService } from '../Services/fruits.service';

import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

describe('AllFruitsComponent', () => {
  let component: AllFruitsComponent;
  let fixture: ComponentFixture<AllFruitsComponent>;
  const fakeActivatedRoute={
    snapshot:{data:{},url:{},fragment:{}}
} as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFruitsComponent ],
      providers:[HttpClient,HttpHandler,{provide:ActivatedRoute,useValue:fakeActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFruitsComponent);
    component = fixture.componentInstance;
   // fixture.debugElement.injector.get(HttpClient);
    fixture.detectChanges();
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
