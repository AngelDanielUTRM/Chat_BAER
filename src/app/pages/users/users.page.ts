import { Component, OnInit } from '@angular/core';
import { SocketServiceService } from 'src/app/services/socket-service.service';
import {ActivatedRoute} from "@angular/router";
import  {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public onlineUsers = [];
  public userId: any;
  constructor(private router: Router, private userService: UserService, private socketService: SocketServiceService, private  route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.userService.getId();
    console.log('user in tab',this.userId);
    this.socketService.getOnlineUsers().subscribe( (users)=>{

      if(users){
        console.log('user connected, showing connected users',users);
        this.onlineUsers = users;
      }
    });
  }

  async navigateToChat(id,socket,nameChat){
    this.socketService.userSelectedSocket= socket;
    this.socketService.userName = nameChat;
    console.log("Este es el socket ID del usuario seleccionado "+socket)
    await this.router.navigate(['chat'], {queryParams:{userId:id}});
  }

}
