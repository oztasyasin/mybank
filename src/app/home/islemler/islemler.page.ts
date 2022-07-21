import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/helpers/base.service';

@Component({
  selector: 'app-islemler',
  templateUrl: './islemler.page.html',
  styleUrls: ['./islemler.page.scss'],
})
export class IslemlerPage implements OnInit {

  constructor(private baseService:BaseService) { }
  islemler=[];
  ngOnInit() {
    this.islemler = this.baseService.getIslemler();
  }

}
