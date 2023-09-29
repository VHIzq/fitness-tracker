import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { SignupComponent } from './auth/signup/signup.component';
import { LogginComponent } from './auth/loggin/loggin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './trainnig/training.service';
import { UIService } from './shared/ui.service';
import { TrainingModule } from './trainnig/training.module';
import { SharedModule } from './shared/shared.modules';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogginComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    TrainingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [AuthService, TrainingService, UIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
