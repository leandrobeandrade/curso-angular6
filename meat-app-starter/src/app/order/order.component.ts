import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  radio: string;

  constructor() { }

  ngOnInit() {
  }

  t() {
    alert()
  }

  radios(valor: string) {
    this.radio = valor
    console.log(this.radio)
  }

}
