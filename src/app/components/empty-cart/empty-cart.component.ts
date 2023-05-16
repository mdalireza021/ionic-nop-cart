import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss'],
  standalone:true,
  imports:[IonicModule]
})
export class EmptyCartComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
