import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

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
  productsURL = `${this.baseURL}/api/home/featureproducts`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product> {
    
    return this.http.get<Product>(this.productsURL,this.httpHeader);

  }
}
