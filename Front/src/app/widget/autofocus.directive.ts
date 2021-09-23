import { Directive, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnDestroy {
  constructor() {
    console.log('Directive autofocus instanciated');
  }
  ngOnDestroy(): void {
    console.log('Destroy Directive Autofocus');
  }
}
