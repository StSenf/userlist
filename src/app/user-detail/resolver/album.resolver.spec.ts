import { TestBed } from '@angular/core/testing';

import { AlbumResolver } from './album.service';

describe('AlbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumResolver = TestBed.get(AlbumResolver);
    expect(service).toBeTruthy();
  });
});
