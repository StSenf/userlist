import {getTestBed, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';

import {UserListResolver} from './user-list.resolver';
import {UserService} from '../../shared/user.service';

import Spy = jasmine.Spy;


describe('UserListService', () => {

  const userMock = [
    {
      id: 1,
      name: "Leane Miller",
      username: "coolleane",
      email: "e@e.de",
      address: {},
      phone: "000",
      website: "www",
      company: {},
    }
  ];

  let resolver: UserListResolver;
  let route: ActivatedRoute;
  let service: UserService;
  let getSpy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserListResolver,
        UserService,
        {
          provide: ActivatedRoute,
          useValue: {
            userList: userMock,
          },
        }
      ]
    });

    const injector = getTestBed();
    resolver = injector.get(UserListResolver);
    service  = injector.get(UserService);
    route    = injector.get(ActivatedRoute);

    getSpy = spyOn(service, "getUsers")
      .and
      .returnValue(of(userMock));
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
