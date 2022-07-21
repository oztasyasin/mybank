import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  headerName="Kayıtlı İşlemler"
  islemler=[
    {
      title: 'Elektrik Faturası',
      state: false,
      description:"",
    },
    {
      title: 'Aidat',
      state: false,
      description:"",
    },
    {
      title: 'Market Alışverişi',
      state:false,
      description:"",
    },
    {
      title: 'Su Faturası',
      state: false,
      description:"",
    },
    {
      title: 'Kira',
      state: false,
      description:"",
    },
    {
      title: 'Harç',
      state: false,
      description:"",
    },
    {
      title: 'Telefon Faturası',
      state: false,
      description:"",
    },
    {
      title: 'Burs',
      state: true,
      description:"",
    },
    {
      title: 'Maaş',
      state: true,
      description:"",
    },
    {
      title: 'Ek Gelir',
      state: true,
      description:"",
    },
  ]
  constructor() { }
  getIslemler(){
    return this.islemler;
  }
  getHeaderName(){
    return this.headerName;
  }
  setHeaderName(name:any){
    this.headerName = name;
    localStorage.setItem("header",this.headerName);
  }
}
