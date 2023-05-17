import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart-item.model';
import { Food } from '../models/food.model';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalItems: number = 0;
  cartItems!: Cart;

  httpHeader = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'DeviceId': '44b4d8cd-7a2d-4a5f-a0e2-798021f1e294',
    })
  }
  
  constructor(private toastService: ToastService, private http: HttpClient) { }

  getSubTotalAmount() {
    //return this.cartItems.map(item => item.offerPrice * item.quantity).reduce((prev, curr) => (prev + curr), 0);
  }

  getShippingCargeAmount() {
   // return 10;
  }
  getTotalAmount() {

    //return this.getSubTotalAmount() + this.getShippingCargeAmount();
  }

  removeItem(cartId: number) {
    //this.cartItems = this.cartItems.filter(cartItem => cartItem.id != cartId);
    
  }

  changeQuantity(id: number, quantity: number) {
    const items = this.cartItems;
    // const index = items.findIndex((item) => item.id === id);
    // this.cartItems[index].quantity += quantity;
    // if (this.cartItems[index].quantity === this.cartItems[index].stock) {
    //   this.toastService.loadtoast('warning', 'can not add more than stock');
    // }
  }

  getCartItems(): Observable<any> {

    //const cartURL = `${environment.baseURL}/shoppingcart/cart`;

    const cartURL = "https://demo460.nop-station.com/api/shoppingcart/cart";

    return this.http.get<any>( cartURL, this.httpHeader);

  }

  getTotalCartItem() {

  }
}