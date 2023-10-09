import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAILABLE_TRANINGS = '[Traninig] Sete Available Trainig';
export const SET_FINISHED_TRAININGS = '[Training] Set Finished Training';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

export class SetAvailableTraining implements Action {
  readonly type = SET_AVAILABLE_TRANINGS;
  constructor(public payload: Array<Exercise>) {}
}

export class SetFinishedTrainings implements Action {
  readonly type = SET_FINISHED_TRAININGS;
  constructor(public payload: Array<Exercise>) {}
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;
  constructor(public payload: Exercise) {}
}

export class StopTrainings implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions =
  | SetAvailableTraining
  | SetFinishedTrainings
  | StartTraining
  | StopTrainings;
