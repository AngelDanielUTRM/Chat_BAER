import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {

  public userSelectedSocket: string;
  public userName: string;
  public message$: BehaviorSubject<any> = new BehaviorSubject('');
  public onlineUsers$: BehaviorSubject<any> = new BehaviorSubject('');



  socket = io(environment.apiBack,{});

  constructor(){}

  public login(user){
    this.socket.emit('login',user);

  }

  public messageSent(uuid){
    const payload={
      uuidMessage:uuid,
      userSocket:this.userSelectedSocket
    }
    this.socket.emit('messageSent',payload);
  }

  public messageReceived(){
    this.socket.on('msg-received',(messages)=>{
      console.log("Me llego un mensaje actualizando lista de mensajes");
      this.message$.next(messages);
    });
    return this.message$.asObservable();
  }

  public getOnlineUsers(){
    this.socket.on('new-user-online',(users)=>{
      this.onlineUsers$.next(users);
    });
    return this.onlineUsers$.asObservable();
  }
}
