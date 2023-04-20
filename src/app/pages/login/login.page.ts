import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  constructor(private loginService : LoginService, private route: Router) {
   }
  ngOnInit() {
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  login(){
    return this.loginService.inicioPopUP().then((result) => {
      this.route.navigate(['/chat']);
    }).catch((error) => {
      console.log(error);
    })
  }

  logout(){
    return this.loginService.logOut();
  }
}
