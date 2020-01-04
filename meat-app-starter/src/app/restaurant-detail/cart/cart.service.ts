import { CarItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { SnackBarService } from 'src/app/shared/snackbar/snackbar.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
    items: CarItem[] = [];

    constructor(private snackbarService: SnackBarService) {}

    clear() {
        this.items = []
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find(mItem => mItem.menuItem.id == item.id)

        if(foundItem) this.increaseQty(foundItem)
        else this.items.push(new CarItem(item))

        this.snackbarService.notify(`Você adicionou o item: ${item.name}`)
    }

    removeItem(item: CarItem) {
        this.items.splice(this.items.indexOf(item), 1)

        this.snackbarService.notify(`Você removeu o item: ${item.menuItem.name}`)
    }

    total(): number {
        return this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0)
    }

    increaseQty(item: CarItem) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CarItem) {
        item.quantity = item.quantity - 1

        if(item.quantity == 0) this.removeItem(item)
    }
}