import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMaskCep]',
  standalone: true
})
export class MaskCepDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    let value = this.el.nativeElement.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }

    this.el.nativeElement.value = value;
  }

  @HostListener('blur', ['$event']) onBlur(event: any) {
    let value = this.el.nativeElement.value;

    if (value.length === 8 && !value.includes('-')) {
      value = value.slice(0, 5) + '-' + value.slice(5);
    } else if (value.length < 9) {
      value = value.padEnd(9, '0');
    }

    this.el.nativeElement.value = value;
  }

}
