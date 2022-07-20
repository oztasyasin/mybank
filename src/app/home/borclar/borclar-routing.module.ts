import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorclarPage } from './borclar.page';

const routes: Routes = [
  {
    path: '',
    component: BorclarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorclarPageRoutingModule {}
