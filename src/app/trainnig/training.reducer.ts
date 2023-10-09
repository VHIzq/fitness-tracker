import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';
import * as fromRoot from '../app.reducer';

export interface TrainingState {
  availableExercises: Array<Exercise>;
  finishedExercises: Array<Exercise>;
}

export interface State extends fromRoot.State {
  training: TrainingState;
}

export function authReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        isAuthenticated: true
      };

    case SET_UNAUTHENTICATED:
      return {
        isAuthenticated: false
      };
    default: {
      return state;
    }
  }
}

export const getIsAuth = (state: State) => state.isAuthenticated;
