import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {UserVm} from "../models/user-vm";

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<UserVm[]> {
    const endpoint = "https://jsonplaceholder.typicode.com/users";

    return this._http.get<UserVm[]>(endpoint);
  }

  public getSingleUser(id: number): Observable<UserVm> {
    const endpoint = "https://jsonplaceholder.typicode.com/users/" + id;

    return this._http.get<UserVm>(endpoint);
  }
}
