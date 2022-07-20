import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private router: Router, private auth:AuthService) { }
  rememberMe = false;
  user={
    Mail:'',
    Password:''
  }
  ngOnInit() {
    if(localStorage.getItem("rememberMe")==="true"&&localStorage.getItem("mail")!=null||localStorage.getItem("password")){
      this.user.Mail = localStorage.getItem("mail");
      this.user.Password = localStorage.getItem("password");
      this.auth.login(this.user).subscribe((data:any)=>{
        const response = data;
        if(response!=null){
          const key = response.key;
          const userId = response.userId;
          const userName = response.userName;
          localStorage.setItem("key",key);
          localStorage.setItem("userId",userId);
          localStorage.setItem("userName",userName);
          setTimeout(() => {
            this.router.navigate(['home'])
          }, 3000);
        }
      })
    }
    else{
      setTimeout(() => {
        this.router.navigate(['login'])
      }, 3000);
    }
    
  }
}
