import { Component, OnInit } from '@angular/core';
import { BaseService } from '../helpers/base.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  headerName = "";
  private storageObserver: any;
  public storage: any;
  constructor(private baseService: BaseService) {
    this.storageObserver = null;
    this.storage = Observable.create(observer => {
      this.storageObserver = observer;
    });
  }
  ngOnInit(): void {
    if (window.addEventListener) {
      
    }
  }
  getHeaderName() {
    this.headerName = this.baseService.getHeaderName();

  }

}
