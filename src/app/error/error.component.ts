import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initPacmanGame();
  }

  initPacmanGame() {
    // JavaScript code for Pac-Man game
    document.addEventListener("DOMContentLoaded", () => {
      const scoreDisplay = document.getElementById("score");
      const width = 28;
      let score = 0;
      const grid = document.querySelector(".grid");

      // Add your Pac-Man game logic here...
    });
  }
}
