import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(public alertController: AlertController) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: "This is an alert message.",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async showOptions() {
    const alert = await this.alertController.create({
      header: "Alert",
      message: "Choose an option below",
      buttons: [
        {
          text: "Decline",
          role: "cancel",
          handler: () => {
            console.log("Declined the offer");
          },
        },
        {
          text: "Accept",
          handler: () => {
            console.log("Accepted the offer");
          },
        },
      ],
    });

    await alert.present();
  }

  async showPrompt() {
    const alert = await this.alertController.create({
      header: "Prompt!",
      inputs: [
        {
          name: "name",
          type: "text",
          placeholder: "Your name",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            console.log(`The name is ${data.name}`);
          },
        },
      ],
    });

    await alert.present();
  }
}
