import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit {
  displayedCOlumns = ['name', 'date', 'duration', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.setupGrid();
  }

  setupGrid() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }
}
