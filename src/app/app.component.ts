import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() { }
}
