import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercisesAvailable!: Array<Exercise>;
  exerciseSubscription!: Subscription;

  @Output() trainingStart = new EventEmitter<void>();

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.setListExcersies();
  }

  public onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  setListExcersies() {
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      (exercises) => (this.exercisesAvailable = exercises)
    );
    this.trainingService.fetchAvailableExercises();
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
  }
}
