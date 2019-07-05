import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

import {IUser} from './interfaces';

const endpoint = 'https://jsonplaceholder.typicode.com/users';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<HttpResponse<IUser[]> | HttpErrorResponse> {

    return this._http.get<IUser[]>(endpoint, {observe: "response"})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError("Something went wrong while fetching the data. Please try later again.");
  }
}
