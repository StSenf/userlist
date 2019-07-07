import {TestBed} from '@angular/core/testing';

import {PhotoResolver} from './photo.resolver';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoResolver = TestBed.get(PhotoResolver);
    expect(service).toBeTruthy();
  });
});
