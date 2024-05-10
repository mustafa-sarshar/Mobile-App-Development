import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { LoadingController } from "@ionic/angular";

import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit, OnDestroy {
  public formGroupEl?: FormGroup;
  public pageMode: "LOGIN" | "REGISTER" = "LOGIN";
  public isLoading: boolean = false;
  private _loggingTimeout: any;

  constructor(
    private readonly _authService: AuthService,
    private readonly _loadingController: LoadingController,
  ) {}

  public ngOnInit() {
    this.formGroupEl = this._authService.initForm(this.pageMode);
  }

  public ngOnDestroy(): void {
    this._clearTimeoutsAndIntervals();
  }

  public onClickToggleMode() {
    this.formGroupEl = undefined;

    if (this.pageMode === "LOGIN") {
      this.pageMode = "REGISTER";
    } else {
      this.pageMode = "LOGIN";
    }

    this.formGroupEl = this._authService.initForm(this.pageMode);
  }

  public onClickSubmit() {
    this.isLoading = true;

    this._loadingController
      .create({ keyboardClose: true, message: "Logging in!" })
      .then((loadingEl: HTMLIonLoadingElement) => {
        loadingEl.present();

        this._loggingTimeout = window.setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this._authService.login();
        }, 1);
      });
  }

  public onErrorInput(inputId: string) {}

  private _clearTimeoutsAndIntervals() {
    if (this._loggingTimeout) {
      window.clearTimeout(this._loggingTimeout);
      this._loggingTimeout = null;
    }
  }
}
