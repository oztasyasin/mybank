import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IstatistikPageRoutingModule } from './istatistik-routing.module';

import { IstatistikPage } from './istatistik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstatistikPageRoutingModule
  ],
  declarations: [IstatistikPage]
})
export class IstatistikPageModule {}
