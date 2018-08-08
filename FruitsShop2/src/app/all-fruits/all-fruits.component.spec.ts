import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFruitsComponent } from './all-fruits.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FruitsService } from '../Services/fruits.service';
import { environment } from '../../environments/environment.prod';

describe('AllFruitsComponent', () => {
  let component: AllFruitsComponent;
  let fixture: ComponentFixture<AllFruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFruitsComponent ],
      providers:[HttpClient,HttpHandler]
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
      fruitsService.getAllFruits(environment.listProductUrl).subscribe((data:Array<any>)=>{

        expect(component.Fruits).toEqual(data);    

      });
  })
});
