import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  template: `
    <h1 mat-dialog-title>Are you sure?</h1>
    <mat-dialog-content>
    <p>You already got {{ passedData.progress }}%</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button [mat-dialog-close]='true' mat-button>Yes</button>
      <button [mat-dialog-close]='false' mat-button>No</button>
    </mat-dialog-actions>
  `
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}
