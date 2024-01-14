import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EditNewOfferPage } from "./edit-new-offer.page";

describe("EditNewOfferPage", () => {
  let component: EditNewOfferPage;
  let fixture: ComponentFixture<EditNewOfferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditNewOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
