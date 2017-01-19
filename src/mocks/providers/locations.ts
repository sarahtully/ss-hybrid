import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Location } from '../../models/location';

@Injectable()
export class Locations {
  locations: Location[] = [];

  defaultLocation: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let locations = [
      {
         "name": "Mason Wok",
         "profilePic": "http://placehold.it/500/500",
         "address": "Oswego, IL",
         "reviews": [
            {
              "id": 0,
              "name": "Dragon Roll",
              "description": "Yum"
            }, 
            {
              "id": 1,
              "name": "Blackhawks Roll",
              "description": "Delicious! Would order again"
            },
            {
              "id": 2,
              "name": "Cruncy Tuna Roll",
              "description": "Delicious! Would order again"
            }
         ]
       },
       {
         "name": "Shinto",
         "profilePic": "http://placehold.it/500/500",
         "address": "Aurora, IL",
         "reviews": [
            {
              "id": 0,
              "name": "Dynamite Roll",
              "description": "Yum"
            }, 
            {
              "id": 1,
              "name": "Volcano Roll",
              "description": "Delicious! Would order again"
            }
         ]
       },
       {
         "name": "SushiYa",
         "profilePic": "http://placehold.it/500/500",
         "address": "Joliet, IL",
         "reviews": [
            {
              "id": 0,
              "name": "Spicy Tuna Roll",
              "description": "Yum"
            }, 
            {
              "id": 1,
              "name": "Spicy Crab Roll",
              "description": "Delicious! Would order again"
            }
         ]
       }
     ];

     for(let location of locations) {
       this.locations.push(new Location(location));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.locations;
    }

    return this.locations.filter((location) => {
      for(let key in params) {
        let field = location[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key]) >= 0) {
          return location;
        } else if(field == params[key]) {
          return location;
        }
      }
      return null;
    });
  }

  add(location: Location) {
    this.locations.push(location);
  }

  delete(location: Location) {
    this.locations.splice(this.locations.indexOf(location), 1);
  }
}
