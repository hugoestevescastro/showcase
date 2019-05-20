import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public numbers: number[];
  constructor() {
    this.numbers = Array(149).fill(0);
  }
}
