import {async, ComponentFixture, getTestBed, TestBed} from "@angular/core/testing";
import {MatTableModule} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

import { UserListComponent } from "./user-list.component";
import {UserService} from "../shared/user.service";
import {UserAddressPipe} from "../shared/pipes/user-address.pipe";

describe("UserListComponent", () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let route: ActivatedRouteSnapshot;

  const USER_LIST = [
    {
      id: 1,
      name: "Leane Miller",
      username: "coolleane",
      email: "e@e.de",
      address: {
        street:   "Gießerstraße",
        suite:    "Wohnung 3A",
        city:     "Leipzig",
        zipcode:  "04229",
        geo:      {
          lat: "xxxxxx",
          lng: "yyyyyy",
        },
      },
      phone: "000",
      website: "www",
      company: {
        name: "Cool Inc.",
        catchPhrase: "Jippy",
        bs: "BS",
      },
    }
  ];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        UserListComponent,
        UserAddressPipe,
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
                userList: USER_LIST,
              },
              url: [
                {
                  path: "users",
                }
              ]
            }
          }
        }
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
      expect(component.dataSource).toEqual(USER_LIST);
    })
  })
});
