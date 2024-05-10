import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { AddOfferService } from "./add-offer.service";
import { Place } from "../../../../definitions/place.model";
import { PlacesService } from "../../../../places.service";

@Component({
  selector: "app-add-offer",
  templateUrl: "./add-offer.page.html",
  styleUrls: ["./add-offer.page.scss"],
})
export class AddOfferPage implements OnInit {
  public formGroupEl?: FormGroup;
  public dateNow: Date = new Date();
  public dateFrom?: Date;
  public places?: Place[];

  constructor(
    private readonly _addOfferService: AddOfferService,
    private readonly _placesService: PlacesService,
  ) {}

  public ngOnInit() {
    this.formGroupEl = this._addOfferService.initForm();
    this.places = this._placesService.places;
  }

  public onChangeDateFrom(evt: CustomEvent) {
    this.dateFrom = undefined;

    if (evt && evt.detail && evt.detail.value) {
      this.dateFrom = new Date(evt.detail.value);
    }
  }

  public onClickSubmit() {
    if (this.formGroupEl && this.formGroupEl.status === "VALID") {
      this._addOfferService.handleSubmitForm(this.formGroupEl);
    }
  }
}
