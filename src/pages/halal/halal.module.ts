import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HalalPage } from './halal';

@NgModule({
  declarations: [
    HalalPage,
  ],
  imports: [
    IonicPageModule.forChild(HalalPage),
  ],
})
export class MasjidsPageModule {}
