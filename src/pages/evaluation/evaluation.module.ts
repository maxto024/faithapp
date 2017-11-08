import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluationPage } from './evaluation';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    EvaluationPage,
  ],
  imports: [
    ChartsModule,
    IonicPageModule.forChild(EvaluationPage),
  ],
})
export class EvaluationPageModule {}
