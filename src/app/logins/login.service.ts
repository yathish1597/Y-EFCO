import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http : HttpClient) { }

  validateLogin(data){
    //return this.http.post(environment.apiUrl+"api/login", data);
  }
}
