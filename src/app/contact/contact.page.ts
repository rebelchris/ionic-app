import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.pop();
  }
}
