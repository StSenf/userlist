import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";

import {UserService} from "../../shared/services/user.service";
import {UserDetailResolver} from "./user-detail.resolver";

describe("UserDetailService", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserDetailResolver,
        UserService,
      ],
    });
  });

  it("should be created", () => {
    const service: UserDetailResolver = TestBed.get(UserDetailResolver);
    expect(service).toBeTruthy();
  });
});
