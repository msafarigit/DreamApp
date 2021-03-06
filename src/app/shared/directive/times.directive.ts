import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// TemplateRef, ViewContainerRef for structural directives!!

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  @Input('appTimes')
  set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.template, { index: i });
    }
  }

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) { }
}

/*
 Structural directives are responsible for HTML layout.
 They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.
 An asterisk (*) precedes the directive attribute name.

 Can contain host views (created by instantiating a component with the createComponent() method),
 and embedded views (created by instantiating a TemplateRef with the createEmbeddedView() method).

  <ul *appTimes=5>
    <li></li>
  </ul>

  ul: viewContainer,
  li: template
*/
