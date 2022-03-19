import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { SocketServiceService } from 'src/app/services/socket-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private socketService: SocketServiceService,
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
    console.log(this.user.email, this.user.password);
    if(this.user.email && this.user.password){
      const query: any = await this.userService.loginUser(this.user);
      console.log(query);
      if (query.ok){
          localStorage.setItem('userId',query.user.id);

          this.socketService.login(query.user);
          await this.router.navigate(['/users'],{queryParams:query.user});

      } else {
        console.log("USER NOT FOUND");
      }
    }
  }
}
