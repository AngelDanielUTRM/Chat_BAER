import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import {UserService} from "../../services/user.service";
import {FormsModule} from "@angular/forms";
import {SocketServiceService} from "../../services/socket-service.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public  messageList = [];
  public  selectedUser: any;
  public  myUserId: any;
  public  chatMessage= '';
  public conversationUuid: string;

  constructor(private socketService:SocketServiceService,private userService:UserService,public router: Router,private menu: MenuController, private route: ActivatedRoute) { }


  async  ngOnInit() {

    this.socketService.messageReceived().subscribe((msgs)=>{
      if (msgs){
        console.log('Updating messages',msgs);
        this.messageList = msgs;
      }
    });

    const user = this.route.snapshot.queryParams;
    console.log("User selected "+user.userId);
    if (user && user.userId){
      this.selectedUser = user.userId;
      this.myUserId = this.userService.getId();
      const payload = {
        sender: this.myUserId,
        receiver: this.selectedUser
      };

      const query: any = await this.userService.loadConversation(payload);
      console.log(query);
      if(query){
        this.conversationUuid = query.uuid;
        this.messageList = query.data;

      }




    }





  }



  async sendMessage(){

    const payload = {
      user_id: this.myUserId,
      conversation_uuid: this.conversationUuid,
      msg: this.chatMessage
    };
    console.log(this.chatMessage);
    const query: any = await this.userService.saveMessage(payload);
    if (query){
      this.messageList.push(query.data);
    }
    console.log(query);



    this.chatMessage = '';
    this.socketService.messageSent(this.conversationUuid);



    return true;
  }




  goToPage(page){
    this.router.navigate([page])
  }

}
