import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarItem } from 'src/app/restaurant-detail/cart/cart-item.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() items: CarItem[];

  @Output() increaseQty = new EventEmitter<CarItem>()
  @Output() decreaseQty = new EventEmitter<CarItem>()
  @Output() remove = new EventEmitter<CarItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CarItem) {
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CarItem) {
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CarItem) {
    this.remove.emit(item)
  }

}
