import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
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
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './trainnig/training.service';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogginComponent,
    TrainnigComponent,
    CurrentTraningComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [AuthService, TrainingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
