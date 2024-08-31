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

  emitValues(){
    this.loginD.emit(this.loginData);
  }


  constructor() { }

  ngOnInit() {}

}
