import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { EmptyCartComponent } from 'src/app/components/empty-cart/empty-cart.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, CartItemComponent, EmptyCartComponent, CommonModule],
})
export class CartPage {
  cartItems = new Observable<CartItem[]>;

  toolbarTitle: string = "Shopping Cart";
  isBackButtonDisabled: boolean = false;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart();
  }
}
