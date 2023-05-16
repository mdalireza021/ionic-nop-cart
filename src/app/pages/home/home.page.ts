import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subject, takeUntil } from 'rxjs';
import { FoodCardComponent } from 'src/app/components/food-card/food-card.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { Products } from 'src/app/constants/product.constant';
import { FoodData } from 'src/app/data/foodData';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, SearchbarComponent, FoodCardComponent, HeaderComponent, HttpClientModule, CommonModule]
})
export class HomePage {

  ngUnsubscribe = new Subject();
  products: Product[] = [];
  foods: Food[] = [];
  filteredFoods: Food[] = [];
  searchText: string = "";

  toolbarTitle: string = "Home";
  isBackButtonDisabled: boolean = true;

  constructor( private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.foods = this.filteredFoods = FoodData;
    this.getProducts();
    console.log(this.products);
  }


  onSearch(ev: any) {
    this.searchText = ev?.target?.value;

    this.filteredFoods = this.foods.filter(food => {
      return food.title?.toLowerCase()?.includes(this.searchText?.toLowerCase());
    });

    console.log(this.foods)
  }

  ///get all products
  async getProducts(): Promise<void> {

    this.productService.getAllProducts()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (products: Product): void => {

          this.products.push(products);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null)
    this.ngUnsubscribe.complete()
  }
}
