import {TestBed} from "@angular/core/testing";

import {PhotoService} from "./photo.service";
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe("PhotoService", () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule,
    ],
    providers: [
      PhotoService,
    ],
  }));

  it("should be created", () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
