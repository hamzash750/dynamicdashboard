import { Component, Input } from "@angular/core";
@Component({
  selector: "w-image",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class ImageComponent {
  constructor() {}
  @Input() name: string;
}
