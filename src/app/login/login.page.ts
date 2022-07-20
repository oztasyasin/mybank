import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Key } from 'protractor';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }
  user={
    Mail:"",
    Password:"",
  }
  rememberMe = false;
  remember = localStorage.getItem("rememberMe");
  ngOnInit() {
    if(this.remember==="true"){
      this.rememberMe = true;
    }
    else{
      this.rememberMe = false;
    }
  }
  mailChange(text:any){
    this.user.Mail = text;
  }
  passwordChange(text:any){
    this.user.Password = text;
  }
  login(){
    if(this.rememberMe){
      localStorage.setItem("mail",this.user.Mail);
      localStorage.setItem("password",this.user.Password);
    }
    this.auth.login(this.user).subscribe((data:any)=>{
      const response = data;
      if(response!=null){
        const key = response.key;
        const userId = response.userId;
        const userName = response.userName;
        localStorage.setItem("key",key);
        localStorage.setItem("userId",userId);
        localStorage.setItem("userName",userName);
        this.router.navigate(['home']);
      }
    })
  }
  checkedChange(){
    localStorage.setItem("rememberMe", String(this.rememberMe))
  }
}
