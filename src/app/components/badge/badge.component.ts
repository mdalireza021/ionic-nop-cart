import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone:true,
  imports: [IonicModule]
})
export class BadgeComponent  implements OnInit {
  @Input() icon!: string;
  @Input() text!: string;
  constructor() { }

  ngOnInit() {}

}
