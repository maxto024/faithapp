import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import {ReminderPage} from '../../pages/reminder/reminder';
/*
  Generated class for the Others page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  prayerTime(){
      this.navCtrl.push('ReminderPage',{
      })
  }

}
