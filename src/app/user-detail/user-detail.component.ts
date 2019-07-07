import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReplaySubject} from 'rxjs';

import {UserVm} from '../shared/models/user-vm';
import {AlbumVm} from '../shared/models/album-vm';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public selectedUser: UserVm;
  public selectedUserAlbum$ = new ReplaySubject<AlbumVm[]>(1);

  constructor(private _activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this.getSelectedUser();
    this.getAlbumsOfSelectedUser();
  }

  private getSelectedUser(): void {
    this.selectedUser = this._activatedRoute.snapshot.data.singleUser;
  }

  private getAlbumsOfSelectedUser(): void {
    const albumList     = this._activatedRoute.snapshot.data.albums;
    const albumsOfUser  = albumList.filter((album) => album.userId === this.selectedUser.id);

    this.selectedUserAlbum$.next(albumsOfUser);
  }
}
