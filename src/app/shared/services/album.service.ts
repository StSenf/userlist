import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {AlbumVm} from "../models/album-vm";

@Injectable()
export class AlbumService {

  constructor(private _http: HttpClient) { }

  public getAlbums(): Observable<AlbumVm[]> {
    const endpoint = "http://jsonplaceholder.typicode.com/albums";

    return this._http.get<AlbumVm[]>(endpoint);
  }
}
