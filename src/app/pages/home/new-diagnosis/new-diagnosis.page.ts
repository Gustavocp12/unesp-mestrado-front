import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-diagnosis',
  templateUrl: './new-diagnosis.page.html',
  styleUrls: ['./new-diagnosis.page.scss'],
})
export class NewDiagnosisPage implements OnInit {

  showCalendar = false;

  constructor() { }

  ngOnInit() {
  }

  openCalendar() {
    this.showCalendar = true;
  }

}
