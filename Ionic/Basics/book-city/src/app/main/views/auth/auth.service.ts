import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";

import { UtilityService } from "../../../shared/services/utility/utility.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  private _isUserAuthenticated: boolean = false;

  constructor(
    private readonly _navController: NavController,
    private readonly _utilityService: UtilityService,
  ) {}

  get isUserAuthenticated() {
    const isUserAuthenticated = window.localStorage.getItem("app__is-user-authenticated");

    if (!isUserAuthenticated) {
      return false;
    }

    return isUserAuthenticated === "true" ? true : false;
  }

  public initForm(mode: "LOGIN" | "REGISTER") {
    switch (mode) {
      case "LOGIN":
        return new FormGroup({
          email: new FormControl(
            {
              value: "",
              disabled: false,
            },
            { updateOn: "blur", validators: [Validators.required, Validators.email] },
          ),
          password: new FormControl(
            { value: "", disabled: false },
            { updateOn: "blur", validators: [Validators.required, Validators.minLength(6)] },
          ),
        });
      case "REGISTER":
        return new FormGroup({
          username: new FormControl(
            {
              value: "",
              disabled: false,
            },
            { updateOn: "blur", validators: [Validators.required, Validators.minLength(3)] },
          ),
          email: new FormControl(
            {
              value: "",
              disabled: false,
            },
            { updateOn: "blur", validators: [Validators.required, Validators.email] },
          ),
          password: new FormControl(
            { value: "", disabled: false },
            { updateOn: "blur", validators: [Validators.required, Validators.minLength(6)] },
          ),
          passwordConfirm: new FormControl(
            { value: "", disabled: false },
            { updateOn: "blur", validators: [Validators.required, Validators.minLength(6)] },
          ),
        });
    }
  }

  public login() {
    window.localStorage.setItem("app__is-user-authenticated", "true");
    this._isUserAuthenticated = true;

    this._navController.navigateRoot(["/", "places"]);
  }

  public logout() {
    window.localStorage.removeItem("app__is-user-authenticated");

    this._isUserAuthenticated = false;
    this._navController.navigateRoot(["/"]);
  }

  public async handleInoutValidationErrorAlert() {
    await this._utilityService.showInputValidationError({ header: "Oops" });
  }
}
