import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NavController } from "@ionic/angular";

import { Offer } from "../../definitions/offer.model";
import { UtilityService } from "../../../../../../../shared/services/utility/utility.service";
import { OffersService } from "../../offers.service";

@Injectable()
export class AddOfferService {
  constructor(
    private readonly _utilityService: UtilityService,
    private readonly _offersService: OffersService,
    private readonly _navController: NavController,
  ) {}

  public initForm() {
    return new FormGroup({
      place: new FormControl(
        {
          value: null,
          disabled: false,
        },
        [Validators.required],
      ),
      dateFrom: new FormControl({ value: null, disabled: false }, [Validators.required]),
      dateTill: new FormControl({ value: null, disabled: false }, [Validators.required]),
    });
  }

  public handleSubmitForm(formData: FormGroup) {
    const offerId = this._utilityService.getRandomId(8, "MIXED");
    const offerData = formData.value;
    const offerAdd = new Offer(
      offerId,
      offerData["place"],
      new Date(offerData["dateFrom"]),
      new Date(offerData["dateTill"]),
    );

    this._offersService.addOffer(offerAdd);
    this._navController.navigateBack(["/", "places", "offers"]);
  }
}
