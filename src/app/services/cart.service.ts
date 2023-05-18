import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Food } from '../models/food.model';
import { ToastService } from './toast.service';
import { Cart } from '../models/cart.model';
import { LoadingService } from './loading.service';
import { ShoppingCart } from '../models/shopping.cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  ngUnsubscribe = new Subject();

  cartItems: Cart[] = [];

  httpHeader = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'DeviceId': '44b4d8cd-7a2d-4a5f-a0e2-798021f1e294',
    })
  }

  constructor(
    private loadingService: LoadingService,
    private http: HttpClient) { }

  getCart(): Observable<ShoppingCart> {

    const cartURL = `${environment.baseURL}/api/shoppingcart/cart`;

    return this.http.get<ShoppingCart>(cartURL, this.httpHeader);
  }

  updateQuantity(id: any, value: number): Observable<any> {

    const updateCartURL = `${environment.baseURL}/api/shoppingcart/updatecart`;
    const updateObj = {

      "FormValues": [
        {
          "Key": "itemquantity" + id,
          "Value": value
        }
      ]

    }
    return this.http.post<any>(updateCartURL, updateObj, this.httpHeader);

  }

  removeCart(id: any): Observable<any> {

    const removeCartURL = `${environment.baseURL}/api/shoppingcart/updatecart`;
    const removeObj = {

      "FormValues": [
        {
          "Key": "removefromcart",
          "Value": id
        }
      ]
    }
    return this.http.post<any>(removeCartURL, removeObj, this.httpHeader);

  }

  ///get all cart items
  getCartItems() {

    const loading = this.loadingService.presentLoading('Please wait...');
    this.getCart()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: async (response: ShoppingCart): Promise<void> => {

          let responseData = {
            data: response.Data,
            message: response.Message,
            errorList: response.ErrorList
          };

          this.cartItems = responseData.data.Cart.Items;
          await loading && this.loadingService.dismissLoading();

        },
        error: async (err) => {
          console.log(err);
          await loading && this.loadingService.dismissLoading();
        }
      });
  }

  getSubTotalAmount() {
    return this.cartItems.map(item => item.SubTotalValue * item.Quantity).reduce((prev, curr) => (prev + curr), 0);
  }

  getShippingCargeAmount() {
    return 10;
  }
  getTotalAmount() {

    return this.getSubTotalAmount() + this.getShippingCargeAmount();
  }

  removeItem(cartId: number) {
    //this.cartItems = this.cartItems.filter(cartItem => cartItem.id != cartId);

  }

  changeQuantity(id: number, quantity: number) {
    const items = this.cartItems;
    //const index = items.findIndex((item) => item.Id === Id);
    //this.cartItems[index].quantity += quantity;
    // if (this.cartItems[index].quantity === this.cartItems[index].stock) {
    //   this.toastService.loadtoast('warning', 'can not add more than stock');
    // }


  }

  getTotalCartItem() {

    return this.cartItems.map(item => item.Quantity).reduce((prev, curr) => (prev + curr), 0);

  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}