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
  selector: 'page-asma_al_husna',
  templateUrl: 'asma-al-husna.html'
})
export class AsmaAlHusnaPage implements OnInit {
near = new  nearby('','','','','');
data = new Array();
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

    this.getService.asmaAlHusna(this.near)
    .then(res=>{
            this.data = res.data;

            console.log(this.data);
  }, error => {
      alert(error);
    });

}


}
