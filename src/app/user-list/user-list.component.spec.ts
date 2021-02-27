import {HttpClientTestingModule} from "@angular/common/http/testing";
import {async, getTestBed, ComponentFixture, TestBed} from "@angular/core/testing";
import {MatTableModule} from "@angular/material/table";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {USER_MOCKS} from "../shared/mocks/user-mocks";
import {UserVm} from "../shared/models/user-vm";
import {UserService} from "../shared/services/user.service";
import {UserListComponent} from "./user-list.component";

describe("UserListComponent", () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let route: ActivatedRouteSnapshot;

  const mockUsers: UserVm[] = USER_MOCKS.map((user) => new UserVm(user));

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        UserListComponent,
      ],
      imports: [
        NoopAnimationsModule,
        MatTableModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: UserService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                userList: mockUsers,
              },
              url: [
                {
                  path: "users",
                },
              ],
            },
          },
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    route     = getTestBed().get(ActivatedRoute);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("#ngOnInit", () => {

    it("should get correct dataSource", () => {
      expect(component.dataSource).toEqual(mockUsers);
    });
  });
});
