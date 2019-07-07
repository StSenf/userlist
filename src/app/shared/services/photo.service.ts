import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PhotoVm} from "../models/photo-vm";

@Injectable()
export class PhotoService {

  constructor(private _http: HttpClient) { }

  public getPhotos(): Observable<PhotoVm[]> {
    const endpoint = "http://jsonplaceholder.typicode.com/photos";

    return this._http.get<PhotoVm[]>(endpoint);
  }
}
