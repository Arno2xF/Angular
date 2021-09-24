import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnDestroy, OnInit {
  constructor(private elt: ElementRef<HTMLInputElement>) {
    console.log('Directive autofocus instanciated');
  }

  public ngOnDestroy(): void {
    console.log('Destroy Directive Autofocus');
  }

  public ngOnInit(): void {
    this.elt.nativeElement.select();
  }
}
