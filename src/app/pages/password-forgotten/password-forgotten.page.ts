import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.page.html',
  styleUrls: ['./password-forgotten.page.scss'],
})
export class PasswordForgottenPage implements OnInit {

  constructor(public router:Router,private menu: MenuController) { }

  goToPage(page){
    this.router.navigate([page])
  }
  ngOnInit() {
  }

}
