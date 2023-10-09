import { Action } from '@ngrx/store';
import { Exercise } from './exercise.model';

export const SET_AVAILABLE_TRANINGS = '[Traninig] Sete Available Trainig';
export const SET_FINISHED_TRAININGS = '[Training] Set Finished Training';
export const START_TRAINIMG = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

export class StartTraining implements Action {
  readonly type = START_TRAINIMG;
  constructor (public payload: Array<Exercise>) {}
}

export class StopTrainings implements Action {
  readonly type = STOP_TRAINING;
}

export type TrainingActions = StartTraining | StopTrainings;
