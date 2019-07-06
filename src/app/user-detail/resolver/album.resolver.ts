import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

import {AlbumService} from '../../shared/album.service';
import {AlbumVm} from '../../shared/models/album-vm';
import {Resolve} from '@angular/router';

@Injectable()
export class AlbumResolver implements Resolve<AlbumVm[]> {

  constructor(private _albumService: AlbumService) { }

  public resolve(): Observable<AlbumVm[]> {

    return this._albumService.getAlbums()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          throwError(error.message);
          return of([]);
        }));

  }
}
