import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Food } from '../models/food.model';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalItems: number = 0;
  cartItems: CartItem[] = [];

  constructor(private toastService: ToastService) { }

  getCart() {
    return of(this.cartItems);
  }
  
  addToCart(item: Food) {

    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      offerPrice: item.offerPrice,
      previusPrice: item.previusPrice,
      color: item.color,
      quantity: 1,
      image: item.image,
      size: item.size,
      stock: item.stock
    }

    const index = this.cartItems.findIndex((i) => i.id === item.id);
    if (index === -1) {
      this.cartItems.push(cartItem);
    } else {
      this.cartItems[index].quantity += 1;
    }

  }

  getTotalItems() {
    return this.cartItems.map(item => item.quantity).reduce((prev, curr) => (prev + curr), 0);
  }

  getSubTotalAmount() {
    return this.cartItems.map(item => item.offerPrice * item.quantity).reduce((prev, curr) => (prev + curr), 0);
  }

  getShippingCargeAmount() {
    return 10;
  }
  getTotalAmount() {

    return this.getSubTotalAmount() + this.getShippingCargeAmount();
  }

  removeItem(cartId: number) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id != cartId);
    console.log(this.cartItems);
  }

  changeQuantity(id: number, quantity: number) {
    const items = this.cartItems;
    const index = items.findIndex((item) => item.id === id);
    this.cartItems[index].quantity += quantity;
    if (this.cartItems[index].quantity === this.cartItems[index].stock) {
      this.toastService.loadtoast('warning', 'can not add more than stock');
    }
  }
}