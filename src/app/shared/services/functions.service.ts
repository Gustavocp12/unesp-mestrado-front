import { Injectable } from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(private alertController: AlertController,
              private toastController: ToastController) {}

  async toastAlert(position: 'top' | 'middle' | 'bottom', message: string, type: string = 'error', duration: number = 3000): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: position,
      icon: 'alert-circle',
      cssClass: type === 'error' ? 'toastError' : 'toastSuccess'
    });

    await toast.present();
  }

  async alert(header: string, subHeader: string, message: string): Promise<void> {

    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

  }
}
