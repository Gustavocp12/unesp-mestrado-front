import {Component, OnInit, Output} from '@angular/core';
import {LoginData, PersonalData, Register} from "../../shared/interfaces/register";
import {RegisterService} from "../../shared/services/register.service";
import {FunctionsService} from "../../shared/services/functions.service";
import {Router} from "@angular/router";

enum Page {
  PERSONAL_DATA = 1,
  LOGIN_DATA = 2
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  emptyFields = true;
  actualPage = Page.PERSONAL_DATA;
  registerData: Register = {
    name: '',
    phone: null,
    clinic: '',
    crmv: null,
    email: '',
    password: ''
  }

  constructor(private registerService: RegisterService, private functionsService: FunctionsService, private router: Router) { }

  ngOnInit() {
  }

  receivePersonalData(event: PersonalData) {
    this.registerData = { ...this.registerData, ...event };

    this.emptyFields = !(this.registerData.name && this.registerData.phone && this.registerData.clinic && this.registerData.crmv);
  }

  receiveLoginData(event: LoginData) {
    this.registerData = { ...this.registerData, ...event };

    this.emptyFields = !(this.registerData.email && this.registerData.password);
  }

  register(){
    const replacePhone = this.registerData.phone?.toString();
    this.registerData.phone = parseInt(replacePhone!.replace(/\D/g, ''));

    if (this.registerData.phone && this.registerData.crmv)
    this.registerService.register(this.registerData.name, this.registerData.phone, this.registerData.clinic, this.registerData.crmv, this.registerData.email, this.registerData.password).subscribe(
      () => {
        this.functionsService.toastAlert('top', 'Cadastro realizado com sucesso! Redirecionando para o login', 'success');
        this.router.navigate(['/login']);
      }
    )
  }

  nextPage() {
    this.actualPage = Page.LOGIN_DATA;
    this.emptyFields = !(this.registerData.email && this.registerData.password);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }



}
