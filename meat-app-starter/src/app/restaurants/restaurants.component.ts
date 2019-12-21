import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = []

  constructor(private restaurantsService: RestaurantService) { }

  ngOnInit() {
    this.restaurantsService.restaurantes().subscribe(_restaurants => {
      this.restaurants = _restaurants
    })
  }

}
