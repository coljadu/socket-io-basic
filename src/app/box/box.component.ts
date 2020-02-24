import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  counts = [];
  emptyCounts = [];
  hideStart = false;
  showGuessNumber = false;
  guessNumber = '';
  guessNumberArray = [];
  myScore = 0;
  tryRemaining = 3;
  gameOver = false;
  showReset = false;
  correctGuessCounter = 0;

  constructor() { }

  ngOnInit() {
    this.fillOutEmptyCount();
    this.generateNumber();
  }

  generateNumber() {
    let randomeNumber;
    while (this.counts.length < 9) {
      randomeNumber = Math.floor((Math.random() * 9) + 1);
      if (!this.counts.includes(randomeNumber)) {
        this.counts.push(randomeNumber);
      }
    }
  }

  fillOutEmptyCount() {
    for (let i = 0; i < 9; i++) {
      this.emptyCounts[i] = null;
    }
  }

  clickHander(index) {
    if (!this.hideStart || this.gameOver) {
      return;
    }
    if (this.hideStart && !this.emptyCounts[index] && this.counts[index] === this.guessNumber) {
      this.emptyCounts[index] = this.counts[index];
      this.myScore++;
      this.correctGuessCounter++;
      if (this.correctGuessCounter < 9) {
        this.genrateGuessNumber();
      } else {
        alert('champ is here');
        this.gameOver = true;
        this.showReset = true;
      }
    } else {
      this.tryRemaining--;
      if (this.tryRemaining) {
        alert('wrong');
      } else {
        this.gameOver = true;
        this.showReset = true;
        alert('game over');
      }
    }

  }

  startCount() {
    const backup = [...this.emptyCounts];
    this.emptyCounts = [...this.counts];
    setTimeout(() => {
      this.emptyCounts = backup;
      this.hideStart = true;
      setTimeout(() => {
        this.genrateGuessNumber();
        this.showGuessNumber = true;
      }, 2000);
    }, 3000);
  }

  genrateGuessNumber() {
    let guessNumber;
    let gotNumber = false;
    while (!gotNumber) {
      guessNumber = Math.floor((Math.random() * 9) + 1);
      if (!this.guessNumberArray.includes(guessNumber)) {
        this.guessNumberArray.push(guessNumber);
        this.guessNumber = guessNumber;
        gotNumber = true;
        return guessNumber;
      }
    }
  }
  resetGame() {
    this.counts = [];
    this.emptyCounts = [];
    this.hideStart = false;
    this.showGuessNumber = false;
    this.guessNumber = '';
    this.guessNumberArray = [];
    this.myScore = 0;
    this.tryRemaining = 3;
    this.gameOver = false;
    this.showReset = false;
    this.correctGuessCounter = 0;
    this.fillOutEmptyCount();
    this.generateNumber();
  }
}
