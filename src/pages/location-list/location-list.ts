import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { LocationCreatePage } from '../location-create/location-create';
import { LocationDetailPage } from '../location-detail/location-detail';

import { Locations } from '../../providers/providers';
import { Location } from '../../models/location';

@Component({
  selector: 'page-location-list',
  templateUrl: 'location-list.html'
})
export class LocationListPage {
  currentLocations: Location[];

  constructor(
    public locations: Locations,
    public navCtrl: NavController, 
    public modalCtrl: ModalController
  ) {
    this.currentLocations = this.locations.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addLocation() {
    let addModal = this.modalCtrl.create(LocationCreatePage);
    addModal.onDidDismiss(location => {
      if (location) {
        this.locations.add(location);
      }
    })
    addModal.present();
  }

  /**
   * Delete a location from the list of locations.
   */
  deleteLocation(location) {
    this.locations.delete(location);
  }

  /**
   * Navigate to the detail page for this location.
   */
  openLocation(location: Location) {
    this.navCtrl.push(LocationDetailPage, {
      location: location
    });
  }

}
