import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {UserDetailResolver} from './user-detail.resolver';
import {UserService} from '../../shared/user.service';

describe('UserDetailService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserDetailResolver,
        UserService,
      ]
    });
  });

  it('should be created', () => {
    const service: UserDetailResolver = TestBed.get(UserDetailResolver);
    expect(service).toBeTruthy();
  });
});
