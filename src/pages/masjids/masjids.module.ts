import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasjidsPage } from './masjids';

@NgModule({
  declarations: [
    MasjidsPage,
  ],
  imports: [
    IonicPageModule.forChild(MasjidsPage),
  ],
})
export class MasjidsPageModule {}
