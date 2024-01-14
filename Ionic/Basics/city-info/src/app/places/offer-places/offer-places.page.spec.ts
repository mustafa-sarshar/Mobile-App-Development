import { ComponentFixture, TestBed } from "@angular/core/testing";
import { OfferPlacesPage } from "./offer-places.page";

describe("OfferPlacesPage", () => {
  let component: OfferPlacesPage;
  let fixture: ComponentFixture<OfferPlacesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfferPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
