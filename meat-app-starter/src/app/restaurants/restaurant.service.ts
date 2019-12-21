import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  restaurantes(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
    .pipe((response: any) => response)
  }

}
