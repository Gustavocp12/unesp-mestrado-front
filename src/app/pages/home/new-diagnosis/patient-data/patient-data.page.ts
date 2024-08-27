import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.page.html',
  styleUrls: ['./patient-data.page.scss'],
})
export class PatientDataPage implements OnInit {

  showCalendar = false;

  constructor() { }

  ngOnInit() {
  }

  openCalendar() {
    this.showCalendar = true;
  }

}
