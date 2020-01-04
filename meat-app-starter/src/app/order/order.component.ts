import { Component, OnInit, ɵConsole } from '@angular/core';
import { OrderService } from './order.service';
import { CarItem } from '../restaurant-detail/cart/cart-item.model';
import { Order, OrderItem } from './order.model';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup
  submitted = false;
  formularioReactiveErrors: boolean;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  delivery: number = 8;                 // valor do frete

  orderId: string;

  constructor(
    private orderService: OrderService, 
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
    }, {
      validator: OrderComponent.equalsTo
    })
  }

  // getter para accesso ao form fields
  get f() { return this.orderForm.controls; }

  /**
   * @param group Valida os emails 
   */
  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  }

  /**
   * Para tabela
   */
  cartItems(): CarItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CarItem) {
    return this.orderService.increaseQty(item)
  }

  decreaseQty(item: CarItem) {
    return this.orderService.decreaseQty(item)
  }

  remove(item: CarItem) {
    return this.orderService.remove(item)
  }

  /**
   * Para Valores
   */
  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  /**
   * @param order Fecha o pedido
   */
  checkOrder(order: Order) {
    this.submitted = true;
    
    order.orderItems = this.cartItems().map((item: CarItem) => {
      return new OrderItem(item.quantity, item.menuItem.id)
    })

    if(this.orderForm.valid) {
      this.orderService.orderCheck(order).subscribe((orderId) => {
        console.log(orderId)

        this.orderId = orderId
  
        this.router.navigate(['/order-summary'])
        this.orderService.clear()
      })
    } else console.log('Form ', this.orderForm.valid)
  }

  isOrderCompleted(): boolean {
    return this.orderId == undefined
  }

}
