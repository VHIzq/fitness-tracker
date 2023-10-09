import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';
import * as fromRoot from '../app.reducer';
import {
  SET_AVAILABLE_TRANINGS,
  SET_FINISHED_TRAININGS,
  START_TRAINING,
  STOP_TRAINING,
  TrainingActions,
} from './training.actions';

export interface TrainingState {
  availableExercises: Array<Exercise>;
  finishedExercises: Array<Exercise>;
  activeTrainig?: Exercise;
}

export interface State extends fromRoot.State {
  training: TrainingState;
}

const initialState: TrainingState = {
  availableExercises: [],
  finishedExercises: [],
  activeTrainig: undefined,
};

export function authReducer(state = initialState, action: TrainingActions) {
  switch (action.type) {
    case SET_AVAILABLE_TRANINGS:
      return {
        ...state,
        availableExercises: action.payload,
      };

    case SET_FINISHED_TRAININGS:
      return {
        ...state,
        finishedExercises: action.payload,
      };

    case START_TRAINING:
      return {
        ...state,
        activeTrainig: action.payload,
      };

    case STOP_TRAINING:
      return {
        activeTrainig: null,
      };
    default: {
      return state;
    }
  }
}

export const getAvailableTrainings = (state: TrainingState) => state.availableExercises;
export const getFinishedExercises = (state: TrainingState) => state.finishedExercises;
export const getActiveTraining = (state: TrainingState) => state.activeTrainig;