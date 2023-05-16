import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { url } from 'inspector';
import { Products } from 'src/app/constants/product.constant';
import { FeaturedProduct } from 'src/app/models/featuredproduct.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
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
  
  constructor(private toastService: ToastService, private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    
    const divElement = this.elementRef.nativeElement.querySelector('.card-img');

    if (divElement) {
      // this.renderer.setStyle(divElement, 'background-image', 'url(assets/watch.png)');
      let imageURL = this.getImageUrl();
      console.log(imageURL);
      this.renderer.setStyle(divElement, 'background-image', 'url(/assets/watch.png)');
    }
  }

  addCart() {
    this.toastService.loadtoast('success', Products.ADD_TO_CART_SUCCESS_MSG);
    //this.cartService.addToCart(this.item);
  }

  
  getImageUrl(): string {
    // Assuming you want to use the image URL from the first item in the 'Data' array
    const imageUrl = this.product.PictureModels[0]?.ImageUrl;
    return imageUrl || ''; // Return the image URL or an empty string if not available
  }
}
