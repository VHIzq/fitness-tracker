import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent {
  @Output() trainingStart = new EventEmitter<void>;

  /**
   * onStartTraining
   */
  public onStartTraining() {
    this.trainingStart.emit();
  }
}
