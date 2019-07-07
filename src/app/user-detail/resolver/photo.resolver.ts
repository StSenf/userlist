import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {of, throwError, Observable} from "rxjs";
import {catchError} from "rxjs/internal/operators";

import {PhotoVm} from "../../shared/models/photo-vm";
import {PhotoService} from "../../shared/services/photo.service";

@Injectable()
export class PhotoResolver implements Resolve<PhotoVm[]> {

  constructor(private _photoService: PhotoService) { }

  public resolve(): Observable<PhotoVm[]> {

    return this._photoService.getPhotos()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throwError(error.message);
          return of([]);
        }));

  }
}
