import { TestBed } from '@angular/core/testing';

import { UserDetailResolver } from './user-detail.service';

describe('UserDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDetailResolver = TestBed.get(UserDetailResolver);
    expect(service).toBeTruthy();
  });
});
