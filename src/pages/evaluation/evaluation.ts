import { Component, OnInit ,ViewChild , OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Getservice, Reminder } from '../../service/app.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
/**
 * Generated class for the EvaluationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluation',
  templateUrl: 'evaluation.html',
})
export class EvaluationPage implements OnInit ,OnChanges {
  @ViewChild( BaseChartDirective ) chart: BaseChartDirective;
  constructor(public navCtrl: NavController, private _getService: Getservice) { }

  public result: any = {


  }

  group = new Reminder('', 0, 0, 0, 0, 0);
  alone = new Reminder('', 0, 0, 0, 0, 0);
  none = new Reminder('', 0, 0, 0, 0, 0);
 
 
 
ngOnChanges(){

  
} 
  ngOnInit() {

    this._getService.EvalationResult().then(res => {
      var i;

      console.log(res.length)
      for (i = 0; i < res.length; i++) {

        //dhuhur
        if (res[i].get('Dhuhr') == "group") {
          this.group.dhuhr = this.group.dhuhr + 1;
          this.barChartData[0]["data"][0]= this.group.dhuhr;
          console.log(this.group.dhuhr);
        }
        else if (res[i].get('Dhuhr') == "alone") {
          this.alone.dhuhr = this.alone.dhuhr + 1;
          this.barChartData[1]["data"][0]= this.alone.dhuhr;
          console.log(this.group.dhuhr);
        }
        else if (res[i].get('Dhuhr') == "none") {
          this.none.dhuhr = this.none.dhuhr + 1;
          this.barChartData[2]["data"][0]= this.none.dhuhr;
        }
        //here is from asr

        if (res[i].get('Asr') == "group") {
          this.group.asr = this.group.asr + 1;
          this.barChartData[0]["data"][1]= this.group.asr;
        }
        else if (res[i].get('Asr') == "alone") {
          this.alone.asr = this.alone.asr + 1;
          this.barChartData[1]["data"][1]= this.alone.asr;
        }
        else if (res[i].get('Asr') == "none") {
          this.none.asr = this.none.asr + 1;
          this.barChartData[2]["data"][1]= this.none.asr;
        }

        //Maghrib
        if (res[i].get('Maghrib') == "group") {
          this.group.maghrib = this.group.maghrib + 1;
          this.barChartData[0]["data"][2]= this.group.maghrib;
        }
        else if (res[i].get('Maghrib') == "alone") {
          this.alone.maghrib = this.alone.maghrib + 1;
          this.barChartData[1]["data"][2]= this.alone.maghrib;
        }
        else if (res[i].get('Maghrib') == "none") {
          this.none.maghrib = this.none.maghrib + 1;
          this.barChartData[2]["data"][2]= this.none.maghrib;
        }

        // Isha
        if (res[i].get('Isha') == "group") {
          this.group.isha = this.group.isha + 1;
          this.barChartData[0]["data"][3]= this.group.isha;
        }
        else if (res[i].get('Isha') == "alone") {
          this.alone.isha = this.alone.isha + 1;
          this.barChartData[1]["data"][3]= this.alone.isha;
        }
        else if (res[i].get('Isha') == "none") {
          this.none.isha = this.none.isha + 1;
          this.barChartData[2]["data"][3]= this.none.isha;
        }
    
      // fajri
      if (res[i].get('Fajri') == "group") {
        this.group.fajri = this.group.fajri + 1;
        this.barChartData[0]["data"][4]= this.group.fajri;
      }
      else if (res[i].get('Fajri') == "alone") {
        this.alone.fajri = this.alone.fajri + 1;
        this.barChartData[1]["data"][4]= this.alone.fajri;
      }
      else if (res[i].get('Fajri') == "none") {
        this.none.fajri = this.none.fajri + 1;
        this.barChartData[2]["data"][4]= this.none.fajri;
      }

     if(i== res.length-1){
      

       console.log(this.barChartData[1]["data"])
     this.chart.ngOnChanges({});
   console.log(this.group, this.alone,this.none);
     }
    }
    })
  
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };

  //Chart Labels
  public barChartLabels: string[] = ['Dhuhr', 'Asr', 'Maghrib', 'Isha', 'Fajri',];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  //Chart data

  public barChartData: any[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: 'Group' },
    { data: [0, 0, 0, 0, 0, 0, 0], label: 'Alone' },
    { data: [0, 0, 0, 0, 0, 0, 0], label: 'None' }
  ];

  // Chart events
  public chartClicked(e: any): void {
    console.log(e);
  }

  // Chart events
  public chartHovered(e: any): void {
    console.log(e);
  }

  
}
