import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginData} from "../../../shared/interfaces/register";

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.scss'],
})
export class LoginDataComponent  implements OnInit {

  @Output() loginD = new EventEmitter<LoginData>();

  loginData: LoginData = {
    email: '',
    password: ''
  }
  emailValid: boolean = true;

  emitValues(){
    this.validateEmail();

    if (this.emailValid){
      this.loginD.emit(this.loginData);
    }
  }

  validateEmail(){
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    this.emailValid = emailPattern.test(this.loginData.email);
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


  constructor() { }

  ngOnInit() {}

}
