import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.setupGrid();
  }

  ngAfterViewInit(): void {
    this.setupSorting();
    this.setupPagination();
  }

  setupGrid() {
    this.dataSource.data =
      this.trainingService.getCompletedOrCancelledExercises();
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
