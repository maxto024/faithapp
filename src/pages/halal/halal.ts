import { Component , OnInit} from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';
import {ReminderPage} from '../../pages/reminder/reminder';

import { nearby, Getservice } from '../../service/app.service'
/*
  Generated class for the Others page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-halal',
  templateUrl: 'halal.html'
})
export class HalalPage implements OnInit {
near = new  nearby('','','','','');
masjids = new Array();
  constructor(
    public navCtrl: NavController,
   public navParams: NavParams,
   private getService: Getservice
   )

    {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

ngOnInit(){
    this.near.key ='AIzaSyBnPA29h6SdGuSkQ34HCmB_sfotOFczhZQ';
    this.near.lat = localStorage.getItem('lat');
    this.near.lon = localStorage.getItem('lon');
    this.near.rankby ='distance';
    this.near.type ='halal';

    this.getService.nearbyme(this.near)
    .then(res=>{
            this.masjids = res.results;

            console.log(this.masjids);
  }, error => {
      alert(error);
    });

}


}
