import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './helpers/base.service';
import { MenuService } from './helpers/menu.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userName = localStorage.getItem("userName");
  user={
    Mail:"",
    Password:"",
  }
  items=[];
  constructor(private service:AuthService,private router:Router,private menuservice:MenuService, private baseService:BaseService) {
    this.items = menuservice.getMenuItems();
  }
  logOut(){
    this.user.Mail = localStorage.getItem("mail");
    this.user.Password = localStorage.getItem("password");
    this.service.logOut(this.user).subscribe((data:any)=>{})
    localStorage.removeItem("mail");
    localStorage.removeItem("password");
    localStorage.setItem("rememberMe","false");
    this.router.navigate(['login']);
  }
  menuClick(item:any){
    let name = item.title;
    this.baseService.setHeaderName(name)    
    
  }
}
