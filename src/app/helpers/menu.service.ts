import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems=[
    {
      title:'Kayıtlı İşlemler',
      icon: 'albums',
      selected: false,
      page: '/home/tabs/islemler',
    },
    {
      title:'Kartlarım',
      icon:'card',
      selected: false,
      page:'/home/tabs/kartlar',
    },
    {
      title:'Raporlar',
      icon:'reader',
      selected: false,
      page:'/home/tabs/raporlar',
    },
    {
      title:'Borçlar',
      icon:'id-card',
      selected: false,
      page:'/home/tabs/borclar',
    },
    {
      title:'Hedefler',
      icon:'cash',
      selected: false,
      page:'/home/tabs/hedefler',
    },
    {
      title:'İstatistikler',
      icon:'trending-up',
      selected: false,
      page:'/home/tabs/istatistik',
    }
  ]
  constructor() { }
  getMenuItems(){
    return this.menuItems;
  }
}
