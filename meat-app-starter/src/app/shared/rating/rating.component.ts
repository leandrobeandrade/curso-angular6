import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rates: number[] = [1,2,3,4,5];
  rate: number = 0;
  s
  constructor() { }

  ngOnInit() {
  }

  ratings(r: number) {
    this.rate = r
    console.log(this.rate)
  }

}
