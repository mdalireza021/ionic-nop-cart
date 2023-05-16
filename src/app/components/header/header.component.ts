import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule]
})
export class HeaderComponent  implements OnInit {

  @Input() toolbarTitle!: string;
  @Input() isBackButtonDisabled!: boolean;
  navCtrl: any;
  
  constructor(public cartService:CartService) { }


  ngOnInit() {}

  gotoCartPage() {

    this.navCtrl.navigateForward('/tabs/cart');
  }

}
