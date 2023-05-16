import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Products } from 'src/app/constants/product.constant';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ProductCardComponent implements OnInit {

  @Input() item!: Food;

  constructor(private toastService: ToastService, private cartService: CartService) { }

  ngOnInit() { }

  addCart() {
    this.toastService.loadtoast('success', Products.ADD_TO_CART_SUCCESS_MSG);
    this.cartService.addToCart(this.item);
  }
}
