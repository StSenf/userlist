import {TestBed} from "@angular/core/testing";

import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AlbumService} from "./album.service";

describe("AlbumService", () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule,
    ],
    providers: [
      AlbumService,
    ],
  }));

  it("should be created", () => {
    const service: AlbumService = TestBed.get(AlbumService);
    expect(service).toBeTruthy();
  });
});
