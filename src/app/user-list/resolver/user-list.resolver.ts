import {HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {of, throwError, Observable} from "rxjs";
import {catchError} from "rxjs/internal/operators";

import {UserVm} from "../../shared/models/user-vm";
import {UserService} from "../../shared/services/user.service";

@Injectable()
export class UserListResolver implements Resolve<UserVm[]> {

  constructor(private _userService: UserService) { }

  public resolve(): Observable<UserVm[]> {

    return this._userService.getUsers()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          throwError(error.message);
          return of([]);
        }));

  }
}
