import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, map } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {
  exerciseChange = new Subject<Exercise>();
  exercisesChanged = new Subject<any>();
  finishedExercisesChanged = new Subject<Array<Exercise>>();
  private availableExercises$!: Observable<any>;
  private finishedExercises$!: Observable<any>;
  private runningExercise!: Exercise;
  private availableExercises: Array<Exercise> = [];
  private firebaseSubscriptions!: Array<Subscription>;

  constructor(private fireStore: Firestore) {}

  fetchAvailableExercises() {
    const availableExercisesRef = collection(
      this.fireStore,
      'availableExercises'
    );
    this.availableExercises$ = collectionData(availableExercisesRef);
    this.firebaseSubscriptions.push(this.availableExercises$
      .pipe(
        map((docArray) => {
          return docArray.map((doc: Exercise) => {
            const { id, name, duration, calories } = doc;
            return {
              id,
              name,
              duration,
              calories,
            };
          });
        })
      )
      .subscribe((exercises: Array<Exercise>) => {
        this.availableExercises = exercises;
        this.exercisesChanged.next([...this.availableExercises]);
      }));
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
    const newExercise: Exercise = {
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    };
    this.addDataToDataBase(newExercise);
    this.runningExercise = null!;
    this.exerciseChange.next(null!);
  }

  cancelExercise(progress: number) {
    const cancelledExercise: Exercise = {
      ...this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      state: 'cancelled',
    };
    this.addDataToDataBase(cancelledExercise);
    this.runningExercise = null!;
    this.exerciseChange.next(null!);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  fetchCompletedOrCancelledExercises() {
    const finishedExercisesRef = collection(
      this.fireStore,
      'finishedExcercises'
    );

    this.finishedExercises$ = collectionData(finishedExercisesRef);
    this.firebaseSubscriptions.push(this.finishedExercises$.subscribe((exercises: Array<Exercise>) => {
      this.finishedExercisesChanged.next(exercises);
    }));
  }
  cancelSubscriptions() {
    this.firebaseSubscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private addDataToDataBase(exercise: Exercise) {
    const finishedExercisesRef = collection(
      this.fireStore,
      'finishedExcercises'
    );
    addDoc(finishedExercisesRef, exercise);
  }
}
