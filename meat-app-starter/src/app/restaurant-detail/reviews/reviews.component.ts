import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  animations: [
    trigger('reviewAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(40px)'}),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any> 

  reviewState: string = 'ready'

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.reviewsOfRestaurant(this.route.snapshot.params['id'])
    .subscribe(x => this.reviews = x)
  }

}
