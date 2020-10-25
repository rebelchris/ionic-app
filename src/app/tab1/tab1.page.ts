import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.data = [];
    this.loadData();
  }

  loadData(event = null) {
    this.http
      .get<{ data: any[] }>(`https://reqres.in/api/unknown`)
      .subscribe((resp: { data: any }) => {
          this.data = resp.data;
      });
  }

}
