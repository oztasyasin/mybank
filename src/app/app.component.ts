import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private service:AuthService,private router:Router,private menuservice:MenuService) {
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
  menuToggle(item:any){
    this.router.navigateByUrl('/home/'+item.page);
  }
}
