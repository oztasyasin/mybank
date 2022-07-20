import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IstatistikPage } from './istatistik.page';

const routes: Routes = [
  {
    path: '',
    component: IstatistikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IstatistikPageRoutingModule {}
