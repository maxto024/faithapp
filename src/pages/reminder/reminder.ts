import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, Getservice, Reminder } from '../../service/app.service';
/**
 * Generated class for the ReminderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html'
})
export class ReminderPage implements OnInit {
  reminder = new Reminder('', true, false, true, false, true);
  user = new User('', '', '', '', '', '', "", "");
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private _getservice: Getservice,
  ) { }
  ngOnInit() {

    if (this.navParams.get("id") != null) {

      this.user.username = this.navParams.get("username");
      this.user.password = this.navParams.get("password");

      this.reminder.id = this.navParams.get("id");

     
    }
    else  if(localStorage.getItem('id')!=null){
        this.reminder.id = localStorage.getItem('id');
      }
      console.log(this.reminder.id);

    this._getservice.reminderGet(this.reminder.id).then(reminder => {



      this.reminder.asr = reminder.get('Asr');
      this.reminder.dhuhr = reminder.get('Dhuhr');
      this.reminder.maghrib = reminder.get('Maghrib');
      this.reminder.isha = reminder.get('Isha');
      this.reminder.fajri = reminder.get('Fajri');

      console.log(this.reminder);
    }, error => {
      alert(error);
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage');
  }


  setReminder() {
    //console.log(this.reminder);

    if (localStorage.getItem('id') == null)
      this._getservice.reminderService(this.reminder).then(rem => {

        this._getservice.login(this.user).then(login => {


          this.navCtrl.push('HomePage', {
            id: login.id
          })
        }, error => {
          alert(error);
        });



      });
    else if (localStorage.getItem('id') != null) {
      this.reminder.id = localStorage.getItem('id');




      this._getservice.reminderUpdate(this.reminder).then(rem => {


        this.navCtrl.push('HomePage', {
          val: 'welcome'
        });





      });

      
    }
  }
}

