import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class CategoryComponent  implements OnInit {

  @Input()  item!: any;
  constructor() { }

  ngOnInit() {}

}
