import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  row1 = ['o', 'x', 'o'];
  row2 = ['x', 'o', 'x'];
  row3 = ['o', 'o', 'o'];
  cells = [];

  ngOnInit() {
    this.newGame();
  }
  newGame() {
    this.cells = [["", "", ""],["", "", ""],["", "", ""]];
  }
}
