import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-traning.component';

@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css'],
})
export class CurrentTraningComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  progress = 0;
  timer!: number;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.setupSpinner();
  }

  /**
   * setupSpinner
   */
  public setupSpinner() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;
      const isMoreThanOneHundred = this.timer >= 100;
      if (isMoreThanOneHundred) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        process: this.progress,
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainingExit.emit();
      } else {
        this.setupSpinner();
      }
    });
  }
}
