import { Component, OnInit } from '@angular/core';

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

  actualPage = Page.PERSONAL_DATA;

  constructor() { }

  ngOnInit() {
  }

  nextPage() {
    this.actualPage = Page.LOGIN_DATA;
  }

  previousPage() {
    this.actualPage = Page.PERSONAL_DATA;
  }



}
