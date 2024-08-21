import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMaskDate]',
  standalone: true
})
export class MaskDateDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: any) {
    const input = this.el.nativeElement.value.replace(/\D/g, '');
    let formatted = '';

    if (input.length <= 2) {
      formatted = input;
    } else if (input.length <= 4) {
      formatted = `${input.slice(0, 2)}/${input.slice(2, 4)}`;
    } else if (input.length <= 8) {
      formatted = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4, 8)}`;
    } else {
      formatted = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4, 8)}`;
    }

    this.el.nativeElement.value = formatted;
  }

}
