
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { prayer, Getservice, Reminder } from '../../service/app.service';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
 image;
  now;
  salah;
  data = new prayer("", "", "", "", "", "", 0);
  reminder = new Reminder('', true, false, true, false, true);
  public config: any;
  Prayers: any;
  p = new Array();
  @ViewChild(Slides) slides: Slides;

  constructor(
 
    public navCtrl: NavController,
    public navParams: NavParams, private ref: ChangeDetectorRef,
    private getService: Getservice) {
  }


  ngOnInit() {


     
  var date = new Date();
  
    this.config = {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 14,
      autoplay: true,
    };

    this.data.city =localStorage.getItem('city')
    this.data.continent = localStorage.getItem('TimeZone');

   
    this.data.method = 2;

    
    var d = new Date();
    console.log(d.getMonth());
var id= localStorage.getItem('id');

   
    this.getService.reminderGet(id).then(reminder => {



      this.reminder.asr = reminder.get('Asr');
      this.reminder.dhuhr = reminder.get('Dhuhr');
      this.reminder.maghrib = reminder.get('Maghrib');
      this.reminder.isha = reminder.get('Isha');
      this.reminder.fajri = reminder.get('Fajri');

      console.log(this.reminder);
    }, error => {
      alert(error);
    });
         var x = date.getMonth();
    this.getService.getPrayerTime(this.data).then(prayer => {
      console.log(prayer);
      this.Prayers = prayer.data;
   
      console.log(i);
      var a =0;
      for (var i =0; i < prayer.data.length; i++) {
       
        if(i>=x){
       
        this.Prayers[a] = prayer.data[i];
        a++;
         //et epoch = new Date(this.Prayers[i].date.readable).getTime()
         //console.log(epoch);
       }
      }


   

      console.log(this.Prayers);
     
      this.ref.detectChanges();
    }, error => {
      alert(error);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayerPage');
  }
 
}

