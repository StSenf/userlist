import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MatTableModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

import {UserListComponent} from './user-list.component';
import {UserService} from '../shared/user.service';
import {UserAddressPipe} from '../shared/pipes/user-address.pipe';
import {USER_MOCKS} from '../shared/mocks/user-mocks';

fdescribe("UserListComponent", () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let route: ActivatedRouteSnapshot;

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
                userList: USER_MOCKS,
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
      expect(component.dataSource).toEqual(USER_MOCKS);
    });
  });
});
