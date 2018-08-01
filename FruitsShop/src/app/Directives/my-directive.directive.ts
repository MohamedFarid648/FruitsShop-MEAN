
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  
  @Input("appMyDirective") color:string;
  ///@Output() clickParagraph=new EventEmitter();
 // @Input('appMyDirective')  directiveProperty:string;  
  constructor(private ef:ElementRef) { 


    ef.nativeElement.innerText+="From Directive";
    this.setColor("skyblue");

  }
  @HostListener('mouseover') 
  onMouseOver() {

    this.setColor(this.color);

  }

  @HostListener('mouseout') 
  onMouseOut() {
   
     this.setColor("skyblue");

  }

  setColor(c:string){
    this.ef.nativeElement.style.backgroundColor=c;


  }
}

