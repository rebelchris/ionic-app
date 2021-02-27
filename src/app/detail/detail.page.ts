import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  number: number;

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  plus() {
    this.number++;
  }

  sub() {
    this.number--;
  }

  dismiss() {
    this.modalController.dismiss({
      number: this.number,
    });
  }
}
