import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public JWToken = 'TK1983';
  private API_URL = environment.api;
  constructor(private httpClient : HttpClient) { }

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

  async userRegister(user){
    try {
      return await this.httpClient.post(`${this.API_URL}/create-user`,user).toPromise();
    } catch (error) {
      
    }
  }

  async loginUser(user){
    try {
      
      return await this.httpClient.post(`${this.API_URL}/login`,user).toPromise();
     
    } catch (error) {
      return { ok:false, message:error}
    }
  }
}
