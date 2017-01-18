import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FirstRunPage } from '../pages/pages';
import { LocationsPage } from '../pages/locations/locations';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: TutorialPage },
    { title: 'Tabs', component: TabsPage },
    { title: 'About', component: AboutPage },
    { title: 'Locations', component: LocationsPage },
    { title: 'Contact', component: ContactPage },
    { title: 'Settings', component: SettingsPage }
  ]

  constructor(translate: TranslateService, platform: Platform) {
    // Set the default language for translation strings, and the current language.
    translate.setDefaultLang('en');
    translate.use('en')

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
