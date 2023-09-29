import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { LogginComponent } from "./loggin/loggin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.modules";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
    SignupComponent,
    LogginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: []
})
export class AuthModule {}