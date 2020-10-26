import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  data: any[] = [];
  page: number = 1;

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.data = [];
    this.loadData();
  }

  loadData(event = null) {
    setTimeout(() => {
      this.http
        .get<{ data: any[] }>(`https://reqres.in/api/unknown?page=${this.page}`)
        .subscribe((resp: { data: any; total_pages: number }) => {
          if (this.page !== resp.total_pages) {
            this.page++;
          } else {
            if (event) event.target.disabled = true;
          }
          this.data = this.data.concat(resp.data);
          if (event) event.target.complete();
        });
    }, 700);
  }
}
