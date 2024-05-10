import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AuthPageRoutingModule } from "./auth-routing.module";

import { AuthPage } from "./auth.page";
import { AuthService } from "./auth.service";

@NgModule({
  declarations: [AuthPage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, AuthPageRoutingModule],
  providers: [AuthService],
})
export class AuthPageModule {}
