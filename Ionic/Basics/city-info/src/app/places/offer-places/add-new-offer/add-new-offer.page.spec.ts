import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AddNewOfferPage } from "./add-new-offer.page";

describe("AddNewOfferPage", () => {
  let component: AddNewOfferPage;
  let fixture: ComponentFixture<AddNewOfferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddNewOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
