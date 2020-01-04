import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from '../menu-item/menu-item.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('mItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-40px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  protected menu: Observable<MenuItem[]>;

  mItemState: string = 'ready'

  constructor(
    private restaurantService: RestaurantService, 
    private route: ActivatedRoute,) { }

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()  

  ngOnInit() {
    this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
    .subscribe((x: any) => this.menu = x)
  }

  emitAddEvent(item) {
    this.add.emit(item)
  }

}
