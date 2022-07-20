import { HttpBackend, HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user={
    Mail:"",
    Password:"",
    Name:"",
    UserName:"",
  }
  private http: HttpClient;
  constructor(private httpBackend:HttpBackend,private auth:AuthService,private router:Router) { 
    this.http = new HttpClient(httpBackend);
  }
  token: any = localStorage.getItem("token");
  headers = new HttpHeaders()
  .set('Authorization', `Bearer ${this.token}`)
  .set('Content-type', 'application/json');
  ngOnInit() {
  }
  registerEvent(){
    console.log(this.user);
    
    this.auth.register(this.user).subscribe((data:any)=>{
      console.log(data);
    });
  }
  userNameChange(name:any){
    this.user.UserName = name;
  }
  mailChange(mail:any){
    this.user.Mail = mail;
  }
  passwordChange(password:any){
    this.user.Password = password;
  }
  nameChange(name:any){
    this.user.Name = name;
  }
  goLogin(){
    this.router.navigate(['login']);
  }
}
