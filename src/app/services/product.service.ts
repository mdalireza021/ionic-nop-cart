import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddToCart } from '../models/add-to-cart.model';
import { FeaturedProduct } from '../models/featuredproduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpHeader = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'DeviceId': '44b4d8cd-7a2d-4a5f-a0e2-798021f1e294',
    })
  }

  baseURL = environment.baseURL;
  featuredProductsURL = `${this.baseURL}/api/home/featureproducts`;

  constructor(private http: HttpClient) { }

  getFeaturedProducts(): Observable<FeaturedProduct> {

    return this.http.get<FeaturedProduct>(this.featuredProductsURL, this.httpHeader);

  }

  addToCart(id: number): Observable<AddToCart> {
    const addToCartURL = `${this.baseURL}/api/shoppingCart/AddProductToCart/details/${id}/1`;
    const postObj = {
      "FormValues": [
        {
          "Key": "addtocart_12020.EnteredQuantity",
          "Value": "1"
        },
        {
          "Key": "addtocart_12020.EnteredGender",
          "Value": "Male"
        }
      ]
    }
    return this.http.post<AddToCart>(addToCartURL, postObj, this.httpHeader);
  }

}
