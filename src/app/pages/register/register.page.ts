import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    userName : '',
    email : '',
    password :''
  };

  constructor(public router:Router,private menu: MenuController, public userService: UserService) { }

  goToPage(page){
    this.router.navigate([page]);
  }
  ngOnInit() {
  }
  async register(){
    const query = await   this.userService.userRegister(this.user);
    console.log(query)
  
  }
}
