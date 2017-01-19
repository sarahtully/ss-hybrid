import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Location } from '../models/location';

@Injectable()
export class Locations {

  constructor(public http: Http, public api: Api) {
  }

  query(params?: any) {
    return this.api.get('/locations', params)
      .map(resp => resp.json());
  }

  add(location: Location) {
  }

  delete(location: Location) {
  }

}
