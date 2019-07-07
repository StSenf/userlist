import {getTestBed, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Observable, of} from 'rxjs';

import {AlbumService} from '../../shared/album.service';
import {AlbumResolver} from './album.resolver';
import {ALBUM_MOCKS} from '../../shared/mocks/album-mocks';

import Spy = jasmine.Spy;

describe('AlbumService', () => {

  let resolver: AlbumResolver;
  let route: ActivatedRoute;
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
        {
          provide: ActivatedRoute,
          useValue: {
            albums: ALBUM_MOCKS,
          }
        }
      ],
    });

    const injector = getTestBed();
    resolver = injector.get(AlbumResolver);
    service  = injector.get(AlbumService);
    route    = injector.get(ActivatedRoute);

    getSpy = spyOn(service, "getAlbums")
      .and
      .returnValue(of(ALBUM_MOCKS));
  });

  it("should resolve a observable", () => {
    expect(resolver.resolve() instanceof Observable).toBe(true);
  });

  it("should call service methode", () => {
    resolver
      .resolve().subscribe(() => {
      expect(getSpy).toHaveBeenCalled();
    });
  });
});
