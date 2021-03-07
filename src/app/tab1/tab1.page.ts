import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  contactForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    options: new FormArray([]),
  });
  dessertOptions: string[] = ["Ice-cream", "Cake", "Fruit"];

  get ordersFormArray() {
    return this.contactForm.controls.options as FormArray;
  }

  constructor() {
    this.dessertOptions.forEach(() =>
      this.ordersFormArray.push(new FormControl(false))
    );
  }

  submitForm() {
    console.log(this.contactForm.value);
  }
}
