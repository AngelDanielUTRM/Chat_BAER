import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public router:Router,private menu: MenuController) { }

  goToPage(page){
    this.router.navigate([page]);
  }
  ngOnInit() {
  }

}
