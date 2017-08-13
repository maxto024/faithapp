import { Component, OnInit, } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User, Getservice } from '../../service/app.service';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers: [Getservice]
})
export class WelcomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private _getservice: Getservice,
  ) {

  }
  user = new User('', '', '', '', '', "", "", '');

  ngOnInit() {
       if(localStorage.getItem('id')!=null && 
       localStorage.getItem('username')!=null && 
       localStorage.getItem('lon')!=null && 
       localStorage.getItem('lat')!=null){
               
      this.navCtrl.push('TabsPage', {
        val :"welcome"
      });
    
       }
  }
  load() {
    this.navCtrl.push('SignupPage', {
      val: 'Registration'
    })
  }

  connect() {

    this._getservice.login(this.user).then(user => {
     

      
      this.navCtrl.push('TabsPage', {
        val :"welcome"
      })
    }, error => {
      alert(error);
    });

  }

}
