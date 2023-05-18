import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { Products } from 'src/app/constants/product.constant';
import { AddToCart } from 'src/app/models/add-to-cart.model';
import { FeaturedProduct } from 'src/app/models/featuredproduct.model';
import { LoadingService } from 'src/app/services/loading.service';
import { ProductService } from 'src/app/services/product.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductCardComponent implements OnInit {

  @Input() product!: FeaturedProduct;
  rating: number = 3.5;

  ngUnsubscribe = new Subject();

  constructor(
    private toastService: ToastService,
    private productService: ProductService,
    private loadingService: LoadingService) { }

  ngOnInit() { }

  addToCart(id:number) {

    

    this.loadingService.presentLoading('Please wait...');
    this.productService.addToCart(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: AddToCart): void => {
          this.loadingService.dismissLoading();
          console.log(this.product);
          this.toastService.loadtoast('success', Products.ADD_TO_CART_SUCCESS_MSG);
        },
        error: () => {
          this.loadingService.dismissLoading();
          this.toastService.loadtoast('danger', Products.ADD_TO_CART_FAILED_MSG);
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

  getImageUrl(): string {
    const imageUrl = this.product.PictureModels[0]?.ImageUrl;
    return imageUrl || '';
  }
}
