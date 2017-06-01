import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs"

@Injectable()
export class ItemService {

  constructor(
    private _http: Http
  ) { }

  increaseClick(){
    return this._http.get('/api/increaseclick')
    .map(data => data.json())
    .toPromise()
  }

  getCost(){
    return this._http.get('/api/getcost')
    .map(data=>data.json())
    .toPromise()
  }

}
