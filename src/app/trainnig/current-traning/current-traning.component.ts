import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css'],
})
export class CurrentTraningComponent implements OnInit {
  progress = 0;
  timer!: number;

  ngOnInit(): void {
    this.setupSpinner();
  }

  /**
   * setupSpinner
   */
  public setupSpinner() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      const isMoreThanFive = this.timer >= 5;
      if (isMoreThanFive) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
  }
}
