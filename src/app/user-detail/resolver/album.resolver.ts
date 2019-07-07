import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError} from "rxjs/internal/operators";
import {Resolve} from "@angular/router";

import {AlbumVm} from "../../shared/models/album-vm";
import {AlbumService} from '../../shared/services/album.service';

@Injectable()
export class AlbumResolver implements Resolve<AlbumVm[]> {

  constructor(private _albumService: AlbumService) { }

  public resolve(): Observable<AlbumVm[]> {

    return this._albumService.getAlbums()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throwError(error.message);
          return of([]);
        }));

  }
}
