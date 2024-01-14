import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DiscoverPlacesPage } from "./discover-places.page";

describe("DiscoverPlacesPage", () => {
  let component: DiscoverPlacesPage;
  let fixture: ComponentFixture<DiscoverPlacesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DiscoverPlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
