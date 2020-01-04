import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('cartAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateX(-40px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  cartState: string = 'ready'

  constructor() { }

  ngOnInit() {
  }

/*   addMenuItem(item: MenuItem) {
    console.log(item)
  } */

}
