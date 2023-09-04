import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

@Injectable()
export class TrainingService {
  exerciseChange = new Subject<Exercise>();
  exercises: Array<Exercise> = [];

  private runningExercise!: Exercise;
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];

  getTrainingExercises() {
    return this.availableExercises.slice();
  }

  startExercise(selectedId: string) {
    const isExerciseSelected = this.availableExercises.find(
      (exercise: Exercise) => exercise.id === selectedId
    );

    if (isExerciseSelected) {
      this.runningExercise = isExerciseSelected;
      this.exerciseChange.next({ ...this.runningExercise });
    } else {
      console.log('Not found exercise selected');
      //* add mat dialog
    }
  }

  completeExercises() {
    this.exercises?.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runningExercise = null!;
    this.exerciseChange.next(null!);
  }

  cancelExercise(progress: number) {
    this.exercises?.push({
      ...this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      state: 'cancelled',
    });
    this.runningExercise = null!;
    this.exerciseChange.next(null!);
    console.log(this.exercises);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  getCompletedOrCancelledExercises() {
    return this.exercises?.slice();
  }
}
