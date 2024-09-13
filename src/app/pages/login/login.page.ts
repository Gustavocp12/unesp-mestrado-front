import { Component, OnInit } from '@angular/core';
import {Login} from "../../shared/interfaces/login";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";
import {FunctionsService} from "../../shared/services/functions.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private loadingController: LoadingController, private functionsService: FunctionsService) { }

  loginInterface: Login = {
    email: '',
    password: ''
  }
  emptyValues = true;
  emailValid: boolean = true;
  rememberLogin: boolean = false;

  ngOnInit() {
    this.verifySavedEmail();
  }

  verifySavedEmail(){
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
      this.loginInterface.email = savedEmail;
      this.rememberLogin = true;
    }
  }

  changeValues(){
    this.emptyValues = !(this.loginInterface.email !== '' && this.loginInterface.password !== '');
    this.validateEmail();
  }

  validateEmail(){
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.emailValid = emailPattern.test(this.loginInterface.email);
  }

  async login(){

    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.loginInterface.email, this.loginInterface.password).subscribe((res: any) => {
      if (res.token && res.userID) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userID', res.userID);

        if (this.rememberLogin) {
          localStorage.setItem('savedEmail', this.loginInterface.email);
        } else {
          localStorage.removeItem('savedEmail');
        }

        loading.dismiss();
        this.functionsService.toastAlert('top', 'Login efetuado com sucesso', 'success');
        this.router.navigate(['/tabs']);
      }
    }, () => {
      this.functionsService.toastAlert('top', 'Erro ao fazer login');
      loading.dismiss();
    });
  }

  goToRegister(){
    this.router.navigate(['/register'], { state: { actualPage: 'PERSONAL_DATA' } });
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
