import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HedeflerPage } from './hedefler.page';

const routes: Routes = [
  {
    path: '',
    component: HedeflerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HedeflerPageRoutingModule {}
