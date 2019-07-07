import {HttpClientTestingModule} from "@angular/common/http/testing";
import {getTestBed, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";

import {PHOTO_MOCKS} from "../../shared/mocks/photo-mocks";
import {PhotoService} from "../../shared/services/photo.service";
import {PhotoResolver} from "./photo.resolver";

import Spy = jasmine.Spy;

describe("PhotoResolver", () => {

  const photoMocks = PHOTO_MOCKS;

  let resolver: PhotoResolver;
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
      ],
    });

    const injector = getTestBed();
    resolver = injector.get(PhotoResolver);
    service  = injector.get(PhotoService);

    getSpy = spyOn(service, "getPhotos")
      .and
      .returnValue(of(photoMocks));
  });

  it("should be created", () => {
    const photoResolver: PhotoResolver = TestBed.get(PhotoResolver);
    expect(photoResolver).toBeTruthy();
  });

  it("should call service method", () => {
    resolver
      .resolve().subscribe(() => {
      expect(getSpy).toHaveBeenCalled();
    });
  });

  it("should resolve a list of photos", () => {
    resolver
      .resolve().subscribe((photos) => {
      expect(photos).toEqual(photoMocks);
    });
  });
});
