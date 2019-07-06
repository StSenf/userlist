import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';

import {UserVm} from '../../shared/models/user-vm';
import {UserService} from '../../shared/user.service';

@Injectable()
export class UserDetailResolver implements Resolve<UserVm> {

  constructor(private _userService: UserService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<UserVm> {
    const userId = route.params.id;

    if (userId) {
      return this._userService.getSingleUser(userId);
    } else {
      return of(new UserVm());
    }
  }
}
