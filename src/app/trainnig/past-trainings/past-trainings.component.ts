import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css'],
})
export class PastTrainingsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedCOlumns = ['name', 'date', 'duration', 'state'];
  dataSource = new MatTableDataSource<Exercise>();

  exChangeSubscription!: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.setupGrid();
  }

  ngAfterViewInit(): void {
    this.setupSorting();
    this.setupPagination();
  }

  setupGrid() {
    this.exChangeSubscription =
      this.trainingService.finishedExercisesChanged.subscribe(
        (exercises: Array<Exercise>) => {
          this.dataSource.data = exercises;
        }
      );
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

  ngOnDestroy(): void {
    const hasSuscriptions = !!this.exChangeSubscription;
    if (hasSuscriptions) {
      this.exChangeSubscription.unsubscribe();
    }
  }
}
