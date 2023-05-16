import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async loadtoast(color: string, message: string) {
    const toast = await this.toastController.create({
      color,
      message,
      duration: 1000,
      position: "top"
    });
    await toast.present();
  }
}
