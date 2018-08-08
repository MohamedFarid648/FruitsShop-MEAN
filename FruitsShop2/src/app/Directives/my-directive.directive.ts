
import { Directive, ElementRef, HostListener, Input, Output,EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  
  @Input("appMyDirective") color:string;
  @Output() clickParagraph=new EventEmitter<string>();
 // @Input('appMyDirective')  directiveProperty:string;  
  constructor(private ef:ElementRef) { 


    ef.nativeElement.innerText+="From Directive";
    this.ef.nativeElement.style.textAlign="center";
    this.setColor("");

  }
  @HostListener('mouseover') 
  onMouseOver() {
   this.clickParagraph.emit("Mouse Over Emmited,,Color is :"+this.color);
    this.setColor(this.color);

  }

  @HostListener('mouseout') 
  onMouseOut() {
   
    this.clickParagraph.emit("Mouse Out Emmited,,Color is :"+this.color);
     this.setColor("skyblue");

  }

  setColor(c:string){
    this.ef.nativeElement.style.backgroundColor=c;


  }
}

