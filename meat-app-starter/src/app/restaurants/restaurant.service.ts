import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  restaurantes(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
    .pipe((response: any) => response)
  }

  restaurantesById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    .pipe((response: any) => response)
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    .pipe((response: any) => response)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
    .pipe((response: any) => response)
  }

  restaurantesSearch(search: string): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`, { params: {q: search}})
    .pipe((response: any) => response)
  }
}



/* 
  parametro q => pega todos os dados e não somente uma propriedade
*/