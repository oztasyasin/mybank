import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly API_URL = "https://localhost:44347/api/auth/";
  private http: HttpClient;
  token: any = localStorage.getItem("token");
  headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`)
    .set('Content-type', 'application/json');
  constructor(private httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
  }
  register(user:any){
    return this.http.post(this.API_URL+"register",user);
  }
  login(user:any){
    return this.http.post(this.API_URL+"login",user);
  }
  logOut(user:any){
    return this.http.post(this.API_URL+"logoff",user);
  }
}
