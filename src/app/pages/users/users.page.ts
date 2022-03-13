import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public onlineUsers = [];
  public user: any;
  constructor(private socketService: SocketServiceService, private  route: ActivatedRoute) { }

  ngOnInit() {
    console.log('init tab from users pages');
    this.user = this.route.snapshot.queryParams;
    console.log('init tab',this.user);

    console.log('user in tab',this.user.userName);
    this.socketService.getOnlineUsers().subscribe( (users)=>{

      if(users){
        console.log('user connected, showing connected users',users);
        this.onlineUsers = users;
      }
    });
  }

}
