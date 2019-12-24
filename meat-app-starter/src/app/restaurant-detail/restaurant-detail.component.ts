import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants/restaurant.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  public _menu: boolean = true;
  public restaurant: Restaurant

  constructor(
    private restaurantsService: RestaurantService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let id: string = this.route.snapshot.params['id']

    this.restaurantsService.restaurantesById(id).subscribe(restaurantes => {
      console.log(restaurantes)
      this.restaurant = restaurantes
    })
  }

  menu() {
    this._menu = true
  }

  aval() {
    this._menu = false
  }

}