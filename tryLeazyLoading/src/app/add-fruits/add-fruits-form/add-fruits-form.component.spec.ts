import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFruitsFormComponent } from './add-fruits-form.component';

describe('AddFruitsFormComponent', () => {
  let component: AddFruitsFormComponent;
  let fixture: ComponentFixture<AddFruitsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFruitsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFruitsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
