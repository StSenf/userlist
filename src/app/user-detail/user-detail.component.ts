import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ReplaySubject} from "rxjs";

import {IAlbum} from "../shared/interfaces";
import {AlbumVm} from "../shared/models/album-vm";
import {PhotoVm} from "../shared/models/photo-vm";
import {UserVm} from "../shared/models/user-vm";

@Component({
  selector: "app-user-detail",
  styleUrls: ["./user-detail.component.scss"],
  templateUrl: "./user-detail.component.html",
})
export class UserDetailComponent implements OnInit {

  public selectedUser: UserVm;
  public selectedUserAlbum$ = new ReplaySubject<AlbumVm[]>(1);
  public clickedAlbumPhoto$ = new ReplaySubject<PhotoVm[]>(1);

  constructor(private _activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this.getSelectedUser();
    this.getAlbumsOfSelectedUser();
  }

  public showPhotosOfSelectedAlbum(album: IAlbum): void {
    const clickedAlbumId       = album.id;
    const photoList            = this._activatedRoute.snapshot.data.photos;
    const photosOfClickedAlbum = photoList.filter((photo) => photo.albumId === clickedAlbumId);

    this.clickedAlbumPhoto$.next(photosOfClickedAlbum);
  }

  private getSelectedUser(): void {
    const singleUser  = this._activatedRoute.snapshot.data.singleUser;
    this.selectedUser = new UserVm(singleUser);
  }

  private getAlbumsOfSelectedUser(): void {
    const albumList     = this._activatedRoute.snapshot.data.albums;
    const albumsOfUser  = albumList.filter((album) => album.userId === this.selectedUser.id);

    this.selectedUserAlbum$.next(albumsOfUser);
  }
}
