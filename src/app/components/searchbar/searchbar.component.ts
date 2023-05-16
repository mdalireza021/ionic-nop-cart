import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports:[IonicModule,FormsModule]
})
export class SearchbarComponent  implements OnInit {

  searchValue: string = "";

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
     
  }
  emitSearchEvent() {
    console.log(this.searchValue)
    this.search.emit(this.searchValue);
  }

}
