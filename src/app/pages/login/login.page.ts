import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router:Router,private menu: MenuController,  private userService : UserService ) { }

  email = '';
  password = '';
  goToPage(page){
    this.router.navigate([page])
  }
  ngOnInit() {
  }


  async SignIn(page){
    console.log(this.email, this.password)
    if (this.email === 'admin' && this.password === '123'){
      localStorage.setItem(this.userService.JWToken,'token123');
      this.router.navigate([page]);
    }else {
      console.log("This is the token" + this.email,this.password)
    }
  }

}
