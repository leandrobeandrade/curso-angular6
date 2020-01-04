import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurant.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, switchMap, distinctUntilChanged, tap, catchError } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  providers: [RestaurantService],
  animations: [
    trigger('search', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('* => *', animate('300ms 0.3s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = []

  searchState: string = 'hidden'

  searchForm: FormGroup
  searchControl: FormControl

  constructor(
    private restaurantsService: RestaurantService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.restaurantsService.restaurantes().subscribe(_restaurants => {
      this.restaurants = _restaurants
    })

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
    .pipe(debounceTime(600), 
      distinctUntilChanged(), 
      switchMap(searchItem => this.restaurantsService.restaurantesSearch(searchItem)
        .pipe(catchError(error => from([])))
      )
    )
    .subscribe(restaurante => {
      this.restaurants = restaurante
    })

    // ANTERIOR
    /* this.searchControl.valueChanges
    .pipe(debounceTime(600), distinctUntilChanged())
    .subscribe(search => {
      this.restaurantsService.restaurantesSearch(search).subscribe(restaurante => {
        this.restaurants = restaurante
      })
    })*/
  }

  toggleSearch() {
    this.searchState = this.searchState == 'hidden' ? 'visible' : 'hidden'
  }

}
