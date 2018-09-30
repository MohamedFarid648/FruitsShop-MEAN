import { environment } from './../../../../../FruitsShop2/src/environments/environment';
import { FruitsService } from './../../Providers/fruits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css']
})
export class FruitsListComponent implements OnInit {
  public Fruits: Array<any> = [];
  isCompleted = false;
  constructor(private FruitsServiceObj: FruitsService) { }

  ngOnInit() {
    const path = environment.listProductUrl;
    this.FruitsServiceObj.getAllFruits(path).subscribe((data: Array<any>) => {

      if (data.length > 0) {
        this.isCompleted = true;
        this.Fruits = data;
      }

      console.log('Fruits is : ');
      console.log(this.Fruits);

    },

      (error) => {
        console.log('Fruits is : ');
        console.log(this.Fruits);
        console.log('Error is :');
        console.log(error);

      });
  }

}
