import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class CartItemComponent  implements OnInit {

  @Input() cartItem!: CartItem;
  
  constructor(public cartService: CartService) { }

  ngOnInit() {}

  removeCard() {
    this.cartService.removeItem(this.cartItem.id);
    console.log(this.cartService.getCart());
  }
}
