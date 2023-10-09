import { createFeatureSelector, createSelector } from '@ngrx/store';
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

export function trainingReducer(state = initialState, action: TrainingActions) {
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
        activeTrainig: {...state.availableExercises.find(
          (exercise: Exercise) => exercise.id === action.payload
        )}
      };

    case STOP_TRAINING:
      return {
        activeTrainig: undefined,
      };
    default: {
      return state;
    }
  }
}

export const getTrainingState =
  createFeatureSelector<TrainingState>('training');

export const getAvailableTrainings = createSelector(
  getTrainingState,
  (state: TrainingState) => state.availableExercises
);
export const getFinishedExercises = createSelector(
  getTrainingState,
  (state: TrainingState) => state.finishedExercises
);
export const getActiveTraining = createSelector(
  getTrainingState,
  (state: TrainingState) => state.activeTrainig
);

export const getIsTraining = createSelector(
  getTrainingState,
  (state: TrainingState) => state.activeTrainig !== undefined
);
