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
import { FeaturedProduct } from 'src/app/models/featuredproduct.model';
import { ProductService } from 'src/app/services/product.service';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { CategoryComponent } from 'src/app/components/category/category.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, SearchbarComponent, FoodCardComponent, HeaderComponent, HttpClientModule, CommonModule, ProductCardComponent, CategoryComponent]
})
export class HomePage {

  ngUnsubscribe = new Subject();

  featuredProductsData: FeaturedProduct[] = [];

  foods: Food[] = [];
  filteredFoods: Food[] = [];
  searchText: string = "";

  toolbarTitle: string = "Home";
  isBackButtonDisabled: boolean = true;
  
  ///items
  items = [
    {
      imageUrl: "assets/foods.png",
      title: "Foods"
    },
    {
      imageUrl: "assets/watch.png",
      title: "Watch"
    },
    {
      imageUrl: "assets/phones.png",
      title: "Phones"
    },
    {
      imageUrl: "assets/furniture.png",
      title: "Furniture"
    },
  ]

  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.foods = this.filteredFoods = FoodData;
    this.getFeaturedProducts();

  }

  onSearch(ev: any) {
    this.searchText = ev?.target?.value;

    this.filteredFoods = this.foods.filter(food => {
      return food.title?.toLowerCase()?.includes(this.searchText?.toLowerCase());
    });
  }

  ///get all featured products
  async getFeaturedProducts(): Promise<void> {

    this.productService.getFeaturedProducts()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: FeaturedProduct): void => {
          let responseData = {
            data: response.Data,
            message: response.Message,
            errorList: response.ErrorList
          };
          this.featuredProductsData = responseData.data;
          console.log(this.featuredProductsData);


        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
