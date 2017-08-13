import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationTracker } from '../providers/location-tracker';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = "WelcomePage";

  constructor(
    platform: Platform,
     statusBar: StatusBar,
      splashScreen: SplashScreen,
        public locationTracker: LocationTracker,
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
           
      console.log(this.locationTracker.timezone())
      this.locationTracker.startTracking();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
