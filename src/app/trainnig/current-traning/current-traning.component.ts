import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-traning.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css'],
})
export class CurrentTraningComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();

  progress = 0;
  timer!: number;

  constructor(
    private dialog: MatDialog,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.setupSpinner();
  }

  public setupSpinner() {
    const duration = this.trainingService.getRunningExercise().duration;
    if (!duration) return;

    const step =  duration/ 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      const isMoreThanOneHundred = this.timer >= 100;
      if (isMoreThanOneHundred) {
        clearInterval(this.timer);
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
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
