import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cells = [];
  count = 0; // oxox
  winner = '';
  winnerMessage = '';
  isGameEnd = false;

  ngOnInit() {
    this.newGame();
  }
  newGame() {
    this.cells = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
  cellClicked(i, j) {
    if (this.isGameEnd) {
      this.reset();
      return;
    }
    if (this.cells && this.cells[i][j] == '') {
      if (this.count % 2 == 1) {
        this.cells[i][j] = 'X';
      } else {
        this.cells[i][j] = 'O';
      }
      this.count++;
    }

    if (this.count >= 5) {
      if (this.checkIfWin()) {
        this.winnerMessage = this.winner + 'Win!';
        this.isGameEnd = true;
      } else if (this.count == 9) {
        this.winnerMessage = 'Nobody Wins!';
        this.isGameEnd = true;
      }
    }
  }

  checkIfWin(): boolean {
    return false;
  }
  reset() {
    this.newGame();
    this.count = 0;
    this.winner = '';
    this.winnerMessage = '';
    this.isGameEnd = false;
  }
}
