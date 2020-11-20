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
  set classNames(classObj: { [key: string]: any }) {
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

/*
Attribute directives
 An Attribute directive changes the appearance or behavior of a DOM element. Attribute directives are used as attributes of elements.
 The built-in NgStyle directive in the Template Syntax guide, for example, can change several element styles at the same time.
 You use the ElementRef in the directive's constructor to inject a reference to the host DOM element, the element to which you applied appHighlight.
 ElementRef grants direct access to the host DOM element through its nativeElement property.
*/
