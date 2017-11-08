import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams,IonicPage, AlertController } from 'ionic-angular';
import { User, Getservice } from '../../service/app.service'

import { LocationTracker } from '../../providers/location-tracker';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'signup.html',
  providers: [Getservice]
})
export class SignupPage implements OnInit {
  registered: boolean;
  public countries;
   TimeZone;


  user = new User('', '', '', '', '', '', "", "");
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private _getservice: Getservice,
    private alertCtrl: AlertController,
    private General: LocationTracker,
    private ref:ChangeDetectorRef
    ) {
    console.log(navParams.get('val'));
  }

  connect() {
    console.log(this.user);

    this._getservice.register(this.user).then(register => {

      let alert = this.alertCtrl.create({
        title: 'Registration Success',
        subTitle: 'Welcome Faith App',
        buttons: ['ok']
      });
    //  alert.present();
   
      this.registered = true;
          this.navCtrl.push('ReminderPage',{
        id: register.id,
        username: this.user.username,
        password : this.user.password
      })

         this.ref.detectChanges();
    });
  }

  ngOnInit() {
    this.registered = false;

    this.countries = this.General.countries();

    console.log(this.countries);
    this.TimeZone = this.General.timezone();
    console.log(this.TimeZone)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
}
