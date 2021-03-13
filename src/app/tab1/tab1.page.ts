import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  data = [];
  constructor() {
    setTimeout(() => {
      this.data.push({
        title: "Test message",
        description: "Some cool description about this person",
      });
    }, 2000);
  }
}
