import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {


  public message$: BehaviorSubject<any> = new BehaviorSubject('');
  public onlineUsers$: BehaviorSubject<any> = new BehaviorSubject('');

  socket = io(environment.apiBack,{});

  constructor(){}

  public login(user){
    this.socket.emit('login',user);

  }

  public getOnlineUsers(){
    this.socket.on('new-user-online',(users)=>{
      this.onlineUsers$.next(users);
    });
    return this.onlineUsers$.asObservable();
  }
}
