import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { PlacesService } from "../../places.service";
import { Place } from "../../definitions/place.model";
import { InfiniteScrollCustomEvent } from "@ionic/angular";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit, OnDestroy {
  public places?: Place[];
  private _placesSubscription?: Subscription;
  private _scrollTimeout: any;
  private _nPlacesToLoad: number = 10;
  private _placesIndexStart: number = 0;
  private _placesIndexEnd: number = this._placesIndexStart + this._nPlacesToLoad;

  constructor(private readonly _placesService: PlacesService) {}

  public ngOnInit() {
    this.places = this._placesService.places.slice(this._placesIndexStart, this._placesIndexEnd);
  }

  public ngOnDestroy(): void {
    this._unsubscribeSubscriptions();
    this._clearTimeoutsAndIntervals();
  }

  public onIonInfinite(evt: InfiniteScrollCustomEvent) {
    this._loadMorePlaces();
    this._scrollTimeout = window.setTimeout(() => {
      (evt as InfiniteScrollCustomEvent).target.complete();
    }, 2000);
  }

  private _loadMorePlaces() {
    const placesAll = this._placesService.places;

    if (placesAll.length < this._placesIndexEnd) {
      return;
    }

    this._placesIndexStart = this._placesIndexEnd;
    this._placesIndexEnd = this._placesIndexEnd + this._nPlacesToLoad;

    console.log(this._placesIndexStart, this._placesIndexEnd);

    const newPlaces = placesAll.slice(this._placesIndexStart, this._placesIndexEnd);
    for (let i = 0; i < newPlaces.length; i++) {
      this.places?.push(newPlaces[i]);
    }
  }

  private _unsubscribeSubscriptions() {
    this._placesSubscription?.unsubscribe();
  }

  private _clearTimeoutsAndIntervals() {
    if (this._scrollTimeout) {
      window.clearTimeout(this._scrollTimeout);
      this._scrollTimeout = null;
    }
  }
}
