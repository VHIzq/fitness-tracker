import { NgModule } from "@angular/core";
import { TrainnigComponent } from "./trainnig.component";
import { CurrentTraningComponent } from "./current-traning/current-traning.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingsComponent } from "./past-trainings/past-trainings.component";
import { SharedModule } from "../shared/shared.modules";
import { TrainingRoutingModule } from "./training-routing.module";
import { StoreModule } from "@ngrx/store";
import { trainingReducer } from "./training.reducer";

@NgModule({
  declarations: [
    TrainnigComponent,
    CurrentTraningComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    //stop training component
  ],
  imports: [
    SharedModule,
    TrainingRoutingModule,
    StoreModule.forFeature('training', trainingReducer)
  ],
  exports: []
})
export class TrainingModule {}