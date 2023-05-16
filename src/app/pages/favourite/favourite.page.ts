import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-favourite',
  templateUrl: 'favourite.page.html',
  styleUrls: ['favourite.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent]
})
export class FavouritePage {

  toolbarTitle: string = "Favourite";
  isBackButtonDisabled: boolean = false;
  
  constructor() {}

}
