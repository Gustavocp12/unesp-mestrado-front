import { Component, OnInit } from '@angular/core';
import {Login} from "../../shared/interfaces/login";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loginInterface: Login = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.loginInterface.email, this.loginInterface.password).subscribe(() => {
      this.router.navigate(['/tabs']);
    })
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }


  public toggleType(input: string, icon: string) {
    const inputElement = document.getElementById(input) as HTMLInputElement;
    const iconElement: any = document.querySelector(`#${icon}`);

    if (inputElement.type === 'password') {
      inputElement.type = 'text';
      iconElement.name = 'eye-outline';
    } else {
      inputElement.type = 'password';
      iconElement.name = 'eye-off-outline';
    }
  }

}
