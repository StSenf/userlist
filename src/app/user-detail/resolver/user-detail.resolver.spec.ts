import {HttpClientTestingModule} from "@angular/common/http/testing";
import {getTestBed, TestBed} from "@angular/core/testing";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {of, Observable} from "rxjs";

import {USER_MOCKS} from "../../shared/mocks/user-mocks";
import {UserService} from "../../shared/services/user.service";
import {UserDetailResolver} from "./user-detail.resolver";

import Spy = jasmine.Spy;

describe("UserDetailService", () => {

  const mockedUser = USER_MOCKS[0];

  let resolver: UserDetailResolver;
  let service: UserService;
  let route: ActivatedRoute;
  let getSpy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserDetailResolver,
        UserService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {id: 1},
            },
          },
        },
      ],
    });

    const injector = getTestBed();
    resolver = injector.get(UserDetailResolver);
    service  = injector.get(UserService);
    route    = injector.get(ActivatedRoute);

    getSpy = spyOn(service, "getSingleUser")
      .and
      .returnValue(of(mockedUser));
  });

  it("should be created", () => {
    const userResolver: UserDetailResolver = TestBed.get(UserDetailResolver);
    expect(userResolver).toBeTruthy();
  });

  it("resolves with an Observable", () => {
    const snapshot = route.snapshot as ActivatedRouteSnapshot;
    expect(resolver.resolve(snapshot) instanceof Observable).toBe(true);
  });

  it("should resolve expected user", () => {
    const snapshot = route.snapshot as ActivatedRouteSnapshot;
    resolver
      .resolve(snapshot).subscribe((user) => {
      expect(user).toEqual(mockedUser);
    });
  });
});
