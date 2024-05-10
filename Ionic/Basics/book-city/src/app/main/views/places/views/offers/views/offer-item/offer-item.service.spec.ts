import { TestBed } from "@angular/core/testing";

import { OfferItemService } from "./offer-item.service";

describe("OfferItemService", () => {
  let service: OfferItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferItemService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
