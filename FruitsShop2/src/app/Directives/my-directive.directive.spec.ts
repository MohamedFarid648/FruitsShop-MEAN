import { MyDirectiveDirective } from './my-directive.directive';
import { ElementRef } from '@angular/core';

describe('MyDirectiveDirective', () => {
  xit('should create an instance', () => {
    let ef:ElementRef;
    const directive = new MyDirectiveDirective(ef);
    expect(directive).toBeTruthy();
  });
});
