import { NgModule } from "@angular/core";
import { TrainnigComponent } from "./trainnig.component";
import { CurrentTraningComponent } from "./current-traning/current-traning.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingsComponent } from "./past-trainings/past-trainings.component";
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.modules";


@NgModule({
  declarations: [
    TrainnigComponent,
    CurrentTraningComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: []
})
export class TrainingModule {}