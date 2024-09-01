import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMaskPhone]',
  standalone: true
})
export class MaskPhoneDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    let value = this.el.nativeElement.value.replace(/\D/g, '');

    if (value.length === 0) {
      this.el.nativeElement.value = '';
      return;
    }

    if (value.length <= 2) {
      value = '(' + value;
    } else if (value.length <= 7) {
      value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
    } else {
      value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7, 11);
    }

    this.el.nativeElement.value = value;
  }



}
