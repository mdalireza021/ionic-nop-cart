import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';
import { EmptyCartComponent } from 'src/app/components/empty-cart/empty-cart.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.page.html',
  styleUrls: ['cart.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, CartItemComponent, EmptyCartComponent, CommonModule],
})
export class CartPage {

  toolbarTitle: string = "Shopping Cart";
  isBackButtonDisabled: boolean = false;

  constructor(public cartService: CartService) { }

  ionViewDidEnter() {
    this.cartService.getCartItems();
  }
}
