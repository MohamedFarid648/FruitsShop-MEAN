import { TestBed, inject } from '@angular/core/testing';

import { FruitsService } from './fruits.service';

xdescribe('FruitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitsService]
    });
  });

  it('should be created', inject([FruitsService], (service: FruitsService) => {
    expect(service).toBeTruthy();
  }));
});
