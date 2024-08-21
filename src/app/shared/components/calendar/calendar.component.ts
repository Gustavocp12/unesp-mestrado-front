import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FunctionsService} from "../../services/functions.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {

  date: any;

  @Output() onCancel: EventEmitter<any> = new EventEmitter;
  @Output() onConfirm: EventEmitter<any> = new EventEmitter;
  maxDate: string = new Date().toISOString();

  constructor(
    private functionsService: FunctionsService
  ) { }

  cancel() {
    this.onCancel.emit();
  }

  async confirm(ev: any) {

    await ev.confirm();

    if (this.date === undefined) return this.functionsService.toastAlert('top', 'Selecione uma data!', 'error');

    const selectedDate = new Date(this.date);
    const currentDate = new Date(this.maxDate);

    if (selectedDate > currentDate) {
      return this.functionsService.toastAlert('top', 'Não é possível selecionar uma data futura!', 'error');
    }

    this.onConfirm.emit(this.date);

  }

}
