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

  async loadConversation(data){
    try {

      return await this.httpClient.post(`${this.API_URL}/load-conversation`,data).toPromise();

    } catch (error) {
      return { ok:false, message:error}
    }
  }

  public async saveMessage(data){
    try {
      return await this.httpClient.post(`${this.API_URL}/save-message`,data).toPromise();
    } catch (error) {
      return { ok:false, message:error};
    }
  }

  getId(){
    const id = localStorage.getItem('userId');
    if ( id != 'undefined'){
      return id;
    } else {
      return  null;
    }
  }
}
