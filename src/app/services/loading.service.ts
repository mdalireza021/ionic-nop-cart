import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async presentLoading(text: string) {
    const loading = await this.loadingController.create({
      message: text
    });
    loading.present();
    return loading;
  }

  async dismissLoading() {
    await this.loadingController.dismiss();
  }
}
