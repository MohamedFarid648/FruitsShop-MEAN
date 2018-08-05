import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
  color:string;
  constructor() { 


    this.color="red";
  }

  ngOnInit() {
  }


  paragraphClicked(messageFromDirective:string){

    console.log(messageFromDirective)
  }
}
