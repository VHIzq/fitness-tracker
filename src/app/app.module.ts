import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { SignupComponent } from './auth/signup/signup.component';
import { LogginComponent } from './auth/loggin/loggin.component';
import { TrainnigComponent } from './trainnig/trainnig.component';
import { CurrentTraningComponent } from './trainnig/current-traning/current-traning.component';
import { NewTrainingComponent } from './trainnig/new-training/new-training.component';
import { PastTrainingsComponent } from './trainnig/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogginComponent,
    TrainnigComponent,
    CurrentTraningComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
