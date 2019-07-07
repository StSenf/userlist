import {HttpClientTestingModule} from "@angular/common/http/testing";
import {getTestBed, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {of, Observable} from "rxjs";

import {ALBUM_MOCKS} from "../../shared/mocks/album-mocks";
import {AlbumService} from "../../shared/services/album.service";
import {AlbumResolver} from "./album.resolver";

import Spy = jasmine.Spy;

describe("AlbumResolver", () => {

  const albumMocks = ALBUM_MOCKS;

  let resolver: AlbumResolver;
  let service: AlbumService;
  let getSpy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        AlbumResolver,
        AlbumService,
      ],
    });

    const injector = getTestBed();
    resolver = injector.get(AlbumResolver);
    service  = injector.get(AlbumService);

    getSpy = spyOn(service, "getAlbums")
      .and
      .returnValue(of(albumMocks));
  });

  it("should resolve an observable", () => {
    expect(resolver.resolve() instanceof Observable).toBe(true);
  });

  it("should call service method", () => {
    resolver
      .resolve().subscribe(() => {
      expect(getSpy).toHaveBeenCalled();
    });
  });

  it("should resolve a list of albums", () => {
    resolver
      .resolve().subscribe((albums) => {
      expect(albums).toEqual(albumMocks);
    });
  });
});
