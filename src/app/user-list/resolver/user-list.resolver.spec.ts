import { TestBed } from '@angular/core/testing';

import { UserListResolver } from './user-list.service';

describe('UserListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserListResolver = TestBed.get(UserListResolver);
    expect(service).toBeTruthy();
  });
});
