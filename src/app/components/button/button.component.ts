import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
