import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trainnig',
  templateUrl: './trainnig.component.html',
  styleUrls: ['./trainnig.component.css'],
})
export class TrainnigComponent implements OnInit {
  onGoingTraining = false;
  exerciseSubscription!: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.setupExerciseSubscription();
  }

  public setupExerciseSubscription() {
    this.exerciseSubscription = this.trainingService.exerciseChange.subscribe(
      (exercise) => {
        exercise
          ? (this.onGoingTraining = true)
          : (this.onGoingTraining = false);
      }
    );
  }
}
