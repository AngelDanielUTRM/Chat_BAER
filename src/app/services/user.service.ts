import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public JWToken = 'TK1983';
  constructor() { }

  getToken(){
    const token = localStorage.getItem(this.JWToken);
    if (token != 'undefined'){
      return token ;
    } else {
      return null;
    }
  }

  logout(){
    localStorage.removeItem(this.JWToken);
  }
}
