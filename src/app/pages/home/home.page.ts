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
      name: 'Novo paciente/diagnóstico',
      icon: 'sparkles-outline',
      redirectTo: 'new-diagnosis'
    },
    {
      name: 'Pacientes com diagnóstico',
      icon: 'analytics-outline',
      redirectTo: 'existing-diagnosis'
    },
    {
      name: 'Pacientes sem diagnóstico',
      icon: 'people-outline',
      redirectTo: 'patient-without-diagnosis'
    }]

  redirectTo(redirectTo: string) {
    this.router.navigate([`/tabs/home/${redirectTo}`]);
  }

}
