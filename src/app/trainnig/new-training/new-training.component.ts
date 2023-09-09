import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  availableExercises$!: Observable<any>;
  exercisesAvailable!: Array<Exercise>;

  @Output() trainingStart = new EventEmitter<void>();

  constructor(
    private trainingService: TrainingService,
    private fireStore: Firestore
  ) {
    const collectionsRef = collection(this.fireStore, 'availableExercises');
    this.availableExercises$ = collectionData(collectionsRef);
  }

  ngOnInit(): void {
    this.getCollectionsFromDB();
    this.setListExcersies();
  }

  public onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  setListExcersies() {
    this.exercisesAvailable = this.trainingService.getTrainingExercises();
  }

  getCollectionsFromDB() {
    this.availableExercises$.subscribe((item) => {
      console.log(item);
    });
  }
}
