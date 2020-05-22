import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string;
  @Input() appHighlight: string;

  constructor(private elm: ElementRef) {
    // console.log('directive native element backgroundColor: ' + elm.nativeElement.style.backgroundColor);
    console.log(elm.nativeElement.id + ' input appHighlight: ' + this.appHighlight);
    // elm.nativeElement.style.backgroundColor = "red";
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elm.nativeElement.style.backgroundColor = color;
  }
}

/*
The @HostListener decorator lets you subscribe to events of the DOM element that hosts an attribute directive.

Of course you could reach into the DOM with standard JavaScript and attach event listeners manually. There are at least three problems with that approach:
  1-You have to write the listeners correctly.
  2-The code must detach the listener when the directive is destroyed to avoid memory leaks.
  3-Talking to DOM API directly isn't a best practice.

It's called an input property because data flows from the binding expression into the directive. Without that input metadata, Angular rejects the binding;
*/
