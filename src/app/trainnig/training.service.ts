import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, map, take } from 'rxjs';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { addDoc, collection } from 'firebase/firestore';
import { Exercise } from './exercise.model';
import { UIService } from '../shared/ui.service';
import * as fromTraining from './training.reducer';
import * as TrainingActions from './training.actions';
import * as UI from '../shared/ui.actions';

@Injectable()
export class TrainingService {
  exerciseChange = new Subject<Exercise>();
  exercisesChanged = new Subject<any>();
  finishedExercisesChanged = new Subject<Array<Exercise>>();
  private availableExercises$!: Observable<any>;
  private finishedExercises$!: Observable<any>;
  private runningExercise!: Exercise;
  private firebaseSubscriptions!: Array<Subscription>;

  constructor(
    private fireStore: Firestore,
    private uiService: UIService,
    private store: Store<fromTraining.State>
  ) {}

  fetchAvailableExercises() {
    this.store.dispatch(new UI.StartLoading());
    const availableExercisesRef = collection(
      this.fireStore,
      'availableExercises'
    );
    this.availableExercises$ = collectionData(availableExercisesRef);
    this.firebaseSubscriptions.push(
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
        )
        .subscribe(
          (exercises: Array<Exercise>) => {
            this.store.dispatch(new UI.StopLoading());
            this.store.dispatch(
              new TrainingActions.SetAvailableTraining(exercises)
            );
          },
          (error) => {
            this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnackBar(
              'Fetching Exercise failed, please tray again later',
              undefined,
              3000
            );
            this.exercisesChanged.next(null);
          }
        )
    );
  }

  startExercise(selectedId: string) {
    this.store.dispatch(new TrainingActions.StartTraining(selectedId));
  }

  completeExercises() {
    this.store
      .select(fromTraining.getActiveTraining)
      .pipe(take(1))
      .subscribe((exercise) => {
        if (exercise) {
          this.addDataToDataBase({
            ...exercise,
            date: new Date(),
            state: 'completed',
          });
        }
      });
    this.store.dispatch(new TrainingActions.StopTrainings());
  }

  cancelExercise(progress: number) {
    this.store
      .select(fromTraining.getActiveTraining)
      .pipe(take(1))
      .subscribe((exercise) => {
        if (exercise) {
          this.addDataToDataBase({
            ...exercise,
            date: new Date(),
            state: 'completed',
            duration: exercise?.duration * (progress / 100),
            calories: exercise?.calories * (progress / 100),
          });
        }
      });
    this.store.dispatch(new TrainingActions.StopTrainings());
  }

  fetchCompletedOrCancelledExercises() {
    const finishedExercisesRef = collection(
      this.fireStore,
      'finishedExcercises'
    );

    this.finishedExercises$ = collectionData(finishedExercisesRef);
    this.firebaseSubscriptions.push(
      this.finishedExercises$.subscribe((exercises: Array<Exercise>) => {
        this.store.dispatch(
          new TrainingActions.SetAvailableTraining(exercises)
        );
      })
    );
  }
  cancelSubscriptions() {
    this.firebaseSubscriptions.forEach((subscription) =>
      subscription.unsubscribe()
    );
  }

  private addDataToDataBase(exercise: Exercise) {
    const finishedExercisesRef = collection(
      this.fireStore,
      'finishedExcercises'
    );
    addDoc(finishedExercisesRef, exercise);
  }
}
