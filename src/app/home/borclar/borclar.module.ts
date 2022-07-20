import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorclarPageRoutingModule } from './borclar-routing.module';

import { BorclarPage } from './borclar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorclarPageRoutingModule
  ],
  declarations: [BorclarPage]
})
export class BorclarPageModule {}
