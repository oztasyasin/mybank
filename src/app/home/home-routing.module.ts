import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'islemler',
        loadChildren: () => import('./islemler/islemler.module').then( m => m.IslemlerPageModule)
      },
      {
        path: 'kartlar',
        loadChildren: () => import('./kartlar/kartlar.module').then( m => m.KartlarPageModule)
      },
      {
        path: 'raporlar',
        loadChildren: () => import('./raporlar/raporlar.module').then( m => m.RaporlarPageModule)
      },
      {
        path: 'borclar',
        loadChildren: () => import('./borclar/borclar.module').then( m => m.BorclarPageModule)
      },
      {
        path: 'hedefler',
        loadChildren: () => import('./hedefler/hedefler.module').then( m => m.HedeflerPageModule)
      },
      {
        path: 'istatistik',
        loadChildren: () => import('./istatistik/istatistik.module').then( m => m.IstatistikPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
