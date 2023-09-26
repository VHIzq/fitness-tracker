import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService implements OnInit {
  exerciseChange = new Subject<Exercise>();
  exercisesChanged = new Subject<any>();
  exercises: Array<Exercise> = [];
  availableExercises$!: Observable<any>;

  private runningExercise!: Exercise;
  private availableExercises: Exercise[] = [];

  constructor(private fireStore: Firestore) {}

  ngOnInit(): void {
    this.fetchAvailableExercises();
  }

  fetchAvailableExercises() {
    const collectionsRef = collection(this.fireStore, 'availableExercises');
    this.availableExercises$ = collectionData(collectionsRef);
    this.availableExercises$
      .pipe(
        map((docArray) => {
          return docArray.map((doc: Exercise) => {
            return {
              id: doc.id,
              name: doc.name,
              duration: doc.duration,
              calories: doc.calories,
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
