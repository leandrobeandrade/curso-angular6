import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any> 

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.reviewsOfRestaurant(this.route.snapshot.params['id'])
    .subscribe(x => this.reviews = x)
  }

}
