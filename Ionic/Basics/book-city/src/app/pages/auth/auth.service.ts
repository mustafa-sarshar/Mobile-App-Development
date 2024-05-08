import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class AuthService {
  private _isUserAuthenticated: boolean = false;

  constructor(private readonly _navController: NavController) {}

  get isUserAuthenticated() {
    const isUserAuthenticated = window.localStorage.getItem("app__is-user-authenticated");

    if (!isUserAuthenticated) {
      return false;
    }

    return isUserAuthenticated === "true" ? true : false;
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
}
