import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { LogginComponent } from "./loggin/loggin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.modules";

@NgModule({
  declarations: [
    SignupComponent,
    LogginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: []
})
export class AuthModule {}