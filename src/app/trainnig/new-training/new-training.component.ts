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
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises!: Array<Exercise>;
  exerciseSubscription!: Subscription;
  isLoading = false;
  private loadingSubs!: Subscription;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIService
  ) {}

  ngOnInit(): void {
    this.loadingSubs = this.uiService.loadingServiceChanged.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );
    this.setListExersices();
  }

  setListExersices() {
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      (exercises) => (this.exercises = exercises)
    );
    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    const hasSuscriptions = !!this.loadingSubs || !!this.exerciseSubscription;
    if (hasSuscriptions) {
      this.exerciseSubscription.unsubscribe();
      this.loadingSubs.unsubscribe();
    }
  }
}
