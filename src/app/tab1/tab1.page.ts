import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(public toastController: ToastController) {}

  async topToast() {
    const toast = await this.toastController.create({
      message: `Hi i'm the top toast`,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }

  async middleToast() {
    const toast = await this.toastController.create({
      message: `Hi i'm the middle toast`,
      duration: 2000,
      position: "middle",
    });
    toast.present();
  }

  async bottomToast() {
    const toast = await this.toastController.create({
      message: `Hi i'm the bottom toast`,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }

  async buttonToast() {
    const toast = await this.toastController.create({
      header: `Hi i'm a toast with buttons`,
      message: "Close me",
      position: "top",
      buttons: [
        {
          side: "start",
          icon: "heart-outline",
          handler: () => {
            console.log("I loved it clicked");
          },
        },
        {
          text: "Done",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    toast.present();
  }
}
