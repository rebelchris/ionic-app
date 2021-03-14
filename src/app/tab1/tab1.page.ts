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
        thumbnail:
          "https://media-exp1.licdn.com/dms/image/C4D03AQFgZBilNtPUMA/profile-displayphoto-shrink_400_400/0/1604728137407?e=1621468800&v=beta&t=tZ6AjBbPdjCMHjCQRTts1saeV00w3rotFFgQ3NoALPU",
        title: "Test message",
        description: "Some cool description about this person",
      });
    }, 2000);
  }
}
