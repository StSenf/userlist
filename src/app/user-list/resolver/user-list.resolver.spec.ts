import {HttpClientTestingModule} from "@angular/common/http/testing";
import {getTestBed, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {of, Observable} from "rxjs";

import {USER_MOCKS} from "../../shared/mocks/user-mocks";
import {UserService} from "../../shared/services/user.service";
import {UserListResolver} from "./user-list.resolver";

import Spy = jasmine.Spy;

describe("UserListService", () => {

  const userMocks = USER_MOCKS;

  let resolver: UserListResolver;
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
      ],
    });

    const injector = getTestBed();
    resolver = injector.get(UserListResolver);
    service  = injector.get(UserService);

    getSpy = spyOn(service, "getUsers")
      .and
      .returnValue(of(userMocks));
  });

  it("should resolve a observable", () => {
    expect(resolver.resolve() instanceof Observable).toBe(true);
  });

  it("should call service method", () => {
    resolver
      .resolve().subscribe(() => {
      expect(getSpy).toHaveBeenCalled();
    });
  });

  it("should resolve a list of users", () => {
    resolver
      .resolve().subscribe((users) => {
      expect(users).toEqual(userMocks);
    });
  });

});
