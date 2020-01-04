import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from './order.component';

export class OrderGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(
        orderComponent: OrderComponent, 
        activateRoute: ActivatedRouteSnapshot, 
        routerSate: RouterStateSnapshot): boolean {

            if(!orderComponent.isOrderCompleted()) {
                window.confirm('Deseja desistir da compra?')
            } else return true
        }
}