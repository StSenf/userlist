import {getTestBed, TestBed} from "@angular/core/testing";
import {of} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

import {PhotoResolver} from "./photo.resolver";
import {ALBUM_MOCKS} from "../../shared/mocks/album-mocks";
import {PhotoService} from "../../shared/services/photo.service";
import {PHOTO_MOCKS} from "../../shared/mocks/photo-mocks";

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
          }
        }
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
    const service: PhotoResolver = TestBed.get(PhotoResolver);
    expect(service).toBeTruthy();
  });
});
