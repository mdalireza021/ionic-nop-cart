import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { Products } from 'src/app/constants/product.constant';
import { CartService } from 'src/app/services/cart.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: any;

  ngUnsubscribe = new Subject();
  constructor(
    public cartService: CartService,
    private loadingService: LoadingService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void { }


  updateCard(id: number, quatity: number) {
    const updatedQuantity = this.cartItem.Quantity + quatity;
    this.cartService.updateQuantity(this.cartItem.Id, updatedQuantity)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: async (response: any): Promise<void> => {
          this.cartService.getCartItems();
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

  removeCard() {
    const loading = this.loadingService.presentLoading('Please wait...');
    this.cartService.removeCart(this.cartItem.Id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: async (response: any): Promise<void> => {
          await loading && this.loadingService.dismissLoading();
          this.toastService.loadtoast('success', Products.REMOVE_FROM_CART_SUCCESS_MSG);
          this.cartService.getCartItems();
        },
        error: async () => {
          await loading && this.loadingService.dismissLoading();
          this.toastService.loadtoast('danger', Products.REMOVE_FROM_CART_FAILED_MSG);
        }
      });
  }

  getImageUrl(): string {
    const imageUrl = this.cartItem.Picture?.ImageUrl;
    return imageUrl || '';
  }

  getPreviousPrice() {
    return this.cartItem.UnitPriceValue + 500.50;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
