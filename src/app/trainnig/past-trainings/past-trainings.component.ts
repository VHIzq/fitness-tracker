import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import * as fromTraining from '../training.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css'],
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedCOlumns = ['name', 'date', 'duration', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {}

  ngOnInit(): void {
    this.setupGrid();
  }

  ngAfterViewInit(): void {
    this.setupSorting();
    this.setupPagination();
  }

  setupGrid() {
    this.store
      .select(fromTraining.getFinishedExercises)
      .subscribe((exercises: Array<Exercise>) => {
        this.dataSource.data = exercises;
      });
    this.trainingService.fetchCompletedOrCancelledExercises();
  }

  filterItems(filterItem: string) {
    if (filterItem) {
      this.dataSource.filter = filterItem.trim().toLowerCase();
    }
  }

  setupSorting() {
    this.dataSource.sort = this.sort;
  }

  setupPagination() {
    this.dataSource.paginator = this.paginator;
  }
}
