import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KartlarPage } from './kartlar.page';

const routes: Routes = [
  {
    path: '',
    component: KartlarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KartlarPageRoutingModule {}
