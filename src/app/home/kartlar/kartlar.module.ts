import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KartlarPageRoutingModule } from './kartlar-routing.module';

import { KartlarPage } from './kartlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KartlarPageRoutingModule
  ],
  declarations: [KartlarPage]
})
export class KartlarPageModule {}
