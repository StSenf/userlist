import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Subject} from 'rxjs';

import {UserService} from '../shared/user.service';
import {AlbumService} from '../shared/album.service';
import {IAddress, IAlbum} from '../shared/interfaces';
import {UserVm} from '../shared/models/user-vm';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public selectedUser: UserVm;
  public selectedUserAddress = "";
  public selectedUserAlbum$ = new Subject<IAlbum[]>();

  constructor(private _activatedRoute: ActivatedRoute,
              private _userService: UserService,
              private _albumService: AlbumService) { }

  public ngOnInit() {
    this.getSelectedUser();
  }

  private getSelectedUser(): void {
    this.selectedUser = this._activatedRoute.snapshot.data.singleUser;
    this.selectedUserAddress = this.convertAddressToReadableFormat(this.selectedUser.address);
    this.getAlbumsOfSelectedUser();
  }

  private convertAddressToReadableFormat(address: IAddress): string {
    return `${address.street}  ${address.suite}, ${address.city} ${address.zipcode}`;
  }

  private getAlbumsOfSelectedUser() {
    this._albumService.getAlbums().subscribe(
      (response: HttpResponse<IAlbum[]>) => {
        const albumList     = response.body;
        const albumsOfUser  = albumList.filter((album) => album.userId === this.selectedUser.id);

        this.selectedUserAlbum$.next(albumsOfUser);
      },
      (error: HttpResponse<HttpErrorResponse>) => {
        console.log(error);
      }
    );
  }

}
