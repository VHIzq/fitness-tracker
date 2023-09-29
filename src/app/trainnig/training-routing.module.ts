import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainnigComponent } from '../trainnig/trainnig.component';

const routes: Routes = [
  {
    path: '',
    component: TrainnigComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
