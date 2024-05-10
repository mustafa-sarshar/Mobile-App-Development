import { Component } from "@angular/core";

import { AuthService } from "./main/views/auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(private readonly _authService: AuthService) {}

  public onClickLogout() {
    this._authService.logout();
  }
}
