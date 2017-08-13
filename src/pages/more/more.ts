import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
settings(){
     this.navCtrl.push('SettingsPage', {
        val :"welcome"
      });
  }
  evaluation(){
    this.navCtrl.push('EvaluationPage',{
      val:"Evaluation"
    })
  }
  asma_al_husna(){
    this.navCtrl.push('AsmaAlHusnaPage',{
      val:"asma_al_husna"
    });
  }
  logout(){
    localStorage.clear();
   window.location.reload();
  }
}
