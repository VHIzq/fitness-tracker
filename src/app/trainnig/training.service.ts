import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {
  exerciseChange = new Subject<Exercise>();
  exercisesChanged = new Subject<any>();
  exercises: Array<Exercise> = [];
  availableExercises$!: Observable<any>;

  private runningExercise!: Exercise;
  private availableExercises: Array<Exercise> = [];

  constructor(private fireStore: Firestore) {}

  fetchAvailableExercises() {
    const collectionsRef = collection(this.fireStore, 'availableExercises');
    this.availableExercises$ = collectionData(collectionsRef);
    this.availableExercises$
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
      ).subscribe((exercises: Array<Exercise>) => {
        this.availableExercises = exercises;
        this.exercisesChanged.next([...this.availableExercises])
      })
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
    this.addDataToDataBase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runningExercise = null!;
    this.exerciseChange.next(null!);
  }

  cancelExercise(progress: number) {
    this.addDataToDataBase({
      ...this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      state: 'cancelled',
    });
    this.runningExercise = null!;
    this.exerciseChange.next(null!);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  getCompletedOrCancelledExercises() {
    return this.exercises?.slice();
  }

  private addDataToDataBase(exercise: Exercise) {
    const collectionRef = collection(this.fireStore, 'finishedExcersies');
    addDoc(collectionRef, exercise);
  }
}
