import {HttpClientTestingModule} from "@angular/common/http/testing";
import {getTestBed, TestBed} from "@angular/core/testing";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";

import {ALBUM_MOCKS} from "../../shared/mocks/album-mocks";
import {PHOTO_MOCKS} from "../../shared/mocks/photo-mocks";
import {PhotoService} from "../../shared/services/photo.service";
import {PhotoResolver} from "./photo.resolver";

import Spy = jasmine.Spy;

describe("PhotoResolver", () => {

  let resolver: PhotoResolver;
  let route: ActivatedRoute;
  let service: PhotoService;
  let getSpy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        PhotoResolver,
        PhotoService,
        {
          provide: ActivatedRoute,
          useValue: {
            photos: PHOTO_MOCKS,
          },
        },
      ],
    });

    const injector = getTestBed();
    resolver = injector.get(PhotoResolver);
    service  = injector.get(PhotoService);
    route    = injector.get(ActivatedRoute);

    getSpy = spyOn(service, "getPhotos")
      .and
      .returnValue(of(ALBUM_MOCKS));
  });

  it("should be created", () => {
    const photoResolver: PhotoResolver = TestBed.get(PhotoResolver);
    expect(photoResolver).toBeTruthy();
  });
});
