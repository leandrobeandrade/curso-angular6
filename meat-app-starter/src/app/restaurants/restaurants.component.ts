import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = []

  constructor() { }

  ngOnInit() {
    this.restaurants = [
      {
        id: "bread-bakery",
        name: "Bread & Bakery",
        category: "Padaria",
        deliveryEstimate: "25m",
        rating: 4.9,
        imagePath: "assets/img/restaurants/breadbakery.png",
        /* "about": "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
        "hours": "Funciona de segunda à sexta, de 8h às 23h" */
      },
      {
        id: "burger-house",
        name: "Burger House",
        category: "Hamburgers",
        deliveryEstimate: "100m",
        rating: 3.5,
        imagePath: "assets/img/restaurants/burgerhouse.png",
        /* "about": "40 anos se especializando em trash food.",
        "hours": "Funciona todos os dias, de 10h às 22h" */
      }
    ]
  }

}
