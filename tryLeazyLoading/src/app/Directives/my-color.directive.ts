
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {
  @Input('appMyColor') appMyColor = '';
  @Output() clickParagraph = new EventEmitter<string>();
 // @Input('appMyDirective')  directiveProperty:string;
  constructor(private ef: ElementRef) {


    ef.nativeElement.innerText += 'From Directive';
    this.ef.nativeElement.style.textAlign = 'center';
    this.setColor('');

  }
  @HostListener('mouseover')
  onMouseOver() {
   this.clickParagraph.emit ('Mouse Over Emmited,,Color is :' + this.appMyColor);
    this.setColor(this.appMyColor);

  }

  @HostListener('mouseout')
  onMouseOut() {
    this.clickParagraph.emit('Mouse Out Emmited,,Color is :' + this.appMyColor);
     this.setColor('skyblue');

  }

  setColor(c: string) {
    this.ef.nativeElement.style.backgroundColor = c;


  }
}

