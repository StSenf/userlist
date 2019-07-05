import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';

import {IAlbum} from './interfaces';
import {catchError} from 'rxjs/internal/operators';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class AlbumService {

  constructor(private _http: HttpClient) { }

  public getAlbums(): Observable<HttpResponse<IAlbum[]> | HttpErrorResponse> {
    const endpoint = 'http://jsonplaceholder.typicode.com/albums';
    return this._http.get<IAlbum[]>(endpoint, {observe: "response"})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError("Something went wrong while fetching the data. Please try later again.");
  }
}
