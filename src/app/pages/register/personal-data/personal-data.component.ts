import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonalData} from "../../../shared/interfaces/register";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss'],
})
export class PersonalDataComponent implements OnInit {

  @Output() personalD = new EventEmitter<PersonalData>();

  personalData: PersonalData = {
    name: '',
    phone: null,
    clinic: '',
    crmv: null
  }

  emitValues(){
    this.personalD.emit(this.personalData);
  }

  constructor() { }

  ngOnInit() {}

}
