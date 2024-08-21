import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [
    {
      name: 'Novo diagnóstico',
      icon: 'sparkles-outline',
      redirectTo: ''
    },
    {
      name: 'Diagóstico já existente',
      icon: 'analytics-outline',
      redirectTo: ''
    }]

}
