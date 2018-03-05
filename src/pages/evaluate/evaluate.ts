import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams ,} from 'ionic-angular';
import { Evalute, Getservice } from '../../service/app.service';
/*

/**
 * Generated class for the EvaluatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluate.html'
})
export class EvaluatePage  implements OnInit{
 evalute = new Evalute('','','','','','');
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private getservice:Getservice
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  ngOnInit(){
     
  }

  onEvalute() {
    console.log(this.evalute);
    this.evalute.id = localStorage.getItem('id');
    this.getservice.setEvalute(this.evalute).then(res=>{
       this.navCtrl.push('TabsPage',{

       })
    });
  }

}