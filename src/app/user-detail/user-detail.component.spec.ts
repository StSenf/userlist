import {HttpClientTestingModule} from "@angular/common/http/testing";
import {async, getTestBed, ComponentFixture, TestBed} from "@angular/core/testing";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {ALBUM_MOCKS} from "../shared/mocks/album-mocks";
import {PHOTO_MOCKS} from "../shared/mocks/photo-mocks";
import {USER_MOCKS} from "../shared/mocks/user-mocks";
import {UserVm} from "../shared/models/user-vm";
import {UserDetailComponent} from "./user-detail.component";

describe("UserDetailComponent", () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let route: ActivatedRouteSnapshot;

  const mockUser: UserVm = new UserVm(USER_MOCKS[0]);

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        UserDetailComponent,
      ],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                albums: ALBUM_MOCKS,
                photos: PHOTO_MOCKS,
                singleUser: mockUser,
              },
              url: [
                {
                  path: "user/1",
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
    fixture   = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    route     = getTestBed().get(ActivatedRoute);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("#ngOnInit", () => {

    it("should get correct user", () => {
      expect(component.selectedUser).toEqual(mockUser);
    });

    it("should get all albums of selected user", () => {
      const albumsOfMockUser = ALBUM_MOCKS.filter((album) => album.userId === mockUser.id);

      component.selectedUserAlbum$.subscribe((albums) => {
        expect(albums).toEqual(albumsOfMockUser);
      });
    });
  });

  describe("#selectAlbum", () => {

    it("should get all photos of clicked album", () => {
      const clickedAlbum         = ALBUM_MOCKS[0];
      const photosOfClickedAlbum = PHOTO_MOCKS.filter((photo) => photo.albumId === clickedAlbum.id);

      component.selectAlbum(clickedAlbum);
      fixture.detectChanges();

      component.clickedAlbumPhoto$.subscribe((photos) => {
        expect(photos).toEqual(photosOfClickedAlbum);
      });
    });
  });
});
