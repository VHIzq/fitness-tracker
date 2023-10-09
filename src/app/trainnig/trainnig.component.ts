import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromTraining from '../trainnig/training.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-trainnig',
  templateUrl: './trainnig.component.html',
  styleUrls: ['./trainnig.component.css'],
})
export class TrainnigComponent implements OnInit {
  onGoingTraining$!: Observable<boolean>;

  constructor(
    private store: Store<fromTraining.State>
  ) {}

  ngOnInit(): void {
    this.setupExerciseSubscription();
  }

  public setupExerciseSubscription() {
    this.onGoingTraining$ = this.store.select(fromTraining.getIsTraining);
  }
}
