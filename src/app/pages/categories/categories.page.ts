import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from "../../components/header/header.component";
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent, SlickCarouselModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesPage implements OnInit {

  slides = [
    { img: '/assets/slider1.png' },
    { img: '/assets/slider2.png' },
    { img: '/assets/slider3.png' },

  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  addSlide() {
    //this.slides.push({ img: '' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit() {
  }
  toolbarTitle: string = "Categories";
  isBackButtonDisabled: boolean = false;

}
