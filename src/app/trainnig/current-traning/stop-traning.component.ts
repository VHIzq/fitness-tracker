import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-training',
  template: `
    <mat-dialog-content>
      
    </mat-dialog-content>
    <h1 mat-dialog-title>Are you sure</h1>
    <button mat-button>Yes</button>
    <button mat-button>No</button>
  `,
})
export class StopTrainingComponent {
  constructor() {}
}
