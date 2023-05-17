import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { EmptyCartComponent } from 'src/app/components/empty-cart/empty-cart.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Cart } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, CartItemComponent, EmptyCartComponent, CommonModule],
})
export class CartPage {

  cartItems!: Cart;

  toolbarTitle: string = "Shopping Cart";
  isBackButtonDisabled: boolean = false;

  ngUnsubscribe = new Subject();

  constructor(public cartService: CartService) { }

  ngOnInit(): void {

    this.getCartItems();
  }

  ///get all cart items
  getCartItems() {

    this.cartService.getCartItems()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: any): void => {

          let responseData = {
            data: response.Data,
            message: response.Message,
            errorList: response.ErrorList
          };

          let responseDataItem = {

          }

          console.log(responseData.data);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
