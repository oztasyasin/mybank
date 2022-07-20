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
      page: 'home/islemler',
    },
    {
      title:'Kartlarım',
      icon:'card',
      selected: false,
      page:'home/kartlar',
    },
    {
      title:'Raporlar',
      icon:'reader',
      selected: false,
      page:'home/raporlar',
    },
    {
      title:'Borçlar',
      icon:'id-card',
      selected: false,
      page:'home/borclar',
    },
    {
      title:'Hedefler',
      icon:'cash',
      selected: false,
      page:'home/hedefler',
    },
    {
      title:'İstatistikler',
      icon:'trending-up',
      selected: false,
      page:'home/istatistik',
    }
  ]
  constructor() { }
  getMenuItems(){
    return this.menuItems;
  }
}
