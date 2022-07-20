import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginhelperService {

  constructor(private authService: AuthService) { }
  login(user: any):any {
    
    this.authService.login(user).subscribe((data: any) => {
      const response = data;
      if (response != null) {
        const key = response.key;
        const userId = response.userId;
        const userName = response.userName;
        localStorage.setItem("key", key);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
        return true;
      }
      else {
        return false;
      }
    })
  }
}
