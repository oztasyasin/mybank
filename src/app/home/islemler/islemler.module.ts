import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslemlerPageRoutingModule } from './islemler-routing.module';

import { IslemlerPage } from './islemler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IslemlerPageRoutingModule
  ],
  declarations: [IslemlerPage]
})
export class IslemlerPageModule {}
