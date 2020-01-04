import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { CartService } from '../restaurant-detail/cart/cart.service';
import { CarItem } from '../restaurant-detail/cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Observable } from 'rxjs';
import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService {

    constructor(private cartService: CartService, private http: HttpClient) {}

    cartItems(): CarItem[] {
        return this.cartService.items
    }

    increaseQty(item: CarItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CarItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CarItem) {
        this.cartService.removeItem(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    orderCheck(order: Order): Observable<string> {
        const headers = new HttpHeaders()
        headers.append('Content-Type', 'application/json')

        let options = {
            headers: headers
        }

        console.log('OderService: ', order)

        return this.http.post<string>(`${MEAT_API}/orders`, order, options)
        .pipe(response => response)
    }

    clear() {
        this.cartService.clear()
    }

 }