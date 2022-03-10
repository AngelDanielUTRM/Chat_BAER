import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public router: Router,
    private menu: MenuController,
    private userService: UserService
  ) { }

  user = {
    userName: '',
    email: '',
    password: '',
  };

  goToPage(page) {
    this.router.navigate([page]);
  }

  ngOnInit() { }

  async logIn(){
    await this.userService.loginUser(this.user)
    console.log(await this.userService.loginUser(this.user))
  }

  //Dunno how to make a token to keep sesion logged async SignIn(page) {

  //   if (this.email === 'admino' && this.password === '123') {
  //     localStorage.setItem(this.userService.JWToken, 'token123');
  //     console.log(this.email, this.password);
  //     this.router.navigate([page]);
  //   } else {
  //     console.log('This is the token' + this.email, this.password);
  //   }
  // }
}
