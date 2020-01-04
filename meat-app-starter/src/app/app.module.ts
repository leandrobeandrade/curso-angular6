import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { CartComponent } from './restaurant-detail/cart/cart.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { CartService } from './restaurant-detail/cart/cart.service';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { OrderService } from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { SnackBarService } from './shared/snackbar/snackbar.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { OrderGuard } from './order/order-guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    CartComponent,
    ReviewsComponent,
    OrderComponent,
    OrderItemComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent,
    SnackbarComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    CartService, 
    OrderService, 
    /*{provide: LOCALE_ID, useValue: 'pt-BR'}*/, 
    SnackBarService,
    OrderGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
