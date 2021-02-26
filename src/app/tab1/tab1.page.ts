import { DetailPage } from "./../detail/detail.page";
import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailPage,
    });

    return await modal.present();
  }
}
