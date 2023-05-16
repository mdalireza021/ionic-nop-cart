import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-more',
    templateUrl: './more.page.html',
    styleUrls: ['./more.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})
export class MorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
