import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  items = [
    {
      name: 'Novo diagnóstico',
      icon: 'sparkles-outline',
      redirectTo: 'new-diagnosis'
    },
    {
      name: 'Diagóstico já existente',
      icon: 'analytics-outline',
      redirectTo: 'existing-diagnosis'
    }]

  redirectTo(redirectTo: string) {
    this.router.navigate([`/tabs/home/${redirectTo}`]);
  }

}
