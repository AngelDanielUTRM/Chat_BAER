import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(public router:Router,private menu: MenuController) { }

  goToPage(page){
    this.router.navigate([page])
  }
  ngOnInit() {
  }

}
