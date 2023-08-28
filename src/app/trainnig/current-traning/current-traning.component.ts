import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-traning.component';

@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css'],
})
export class CurrentTraningComponent implements OnInit {
  progress = 0;
  timer!: number;

  constructor(
    private dialog: MatDialog
  ) {}

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
    this.dialog.open(StopTrainingComponent); 
  }
}
