import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HedeflerPageRoutingModule } from './hedefler-routing.module';

import { HedeflerPage } from './hedefler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HedeflerPageRoutingModule
  ],
  declarations: [HedeflerPage]
})
export class HedeflerPageModule {}
