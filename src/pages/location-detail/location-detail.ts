import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Locations } from '../../providers/providers';

@Component({
  selector: 'page-location-detail',
  templateUrl: 'location-detail.html'
})
export class LocationDetailPage {
  location: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public locations: Locations
  ) {
    this.location = navParams.get('location') || locations.defaultLocation;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationDetailPage');
  }

}
