import { Directive, ElementRef, Input } from '@angular/core';

// ElementRef for attribute directives!!

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  // @Input('appClass')
  // set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  @Input('appClass')
  set classNames(classObj: {[key: string]: any}){
    for (const key in classObj) {
      if (classObj.hasOwnProperty(key) && classObj[key]) {
        this.element.nativeElement.classList.add(key);
      }
      else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

  constructor(private element: ElementRef) { }

}
