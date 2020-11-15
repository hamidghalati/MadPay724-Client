import { Injectable } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseURL = 'https://localhost:44396/site/admin/auth/';
constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseURL + 'login', model).pipe(
    map((resp: any) => {
      const user = resp;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    })
  );
}

register(model: any) {
  return this.http.post(this.baseURL + 'register', model);
}

}

