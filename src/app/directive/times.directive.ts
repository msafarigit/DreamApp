import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// TemplateRef, ViewContainerRef for structural directives!!

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  @Input('appTimes')
  set render(times: number) {
    this.viewContainer.clear();

    for(let i = 0; i < times; i++){
      this.viewContainer.createEmbeddedView(this.template, { index: i });
    }
  }

  // Can contain host views (created by instantiating a component with the createComponent() method),
  // and embedded views (created by instantiating a TemplateRef with the createEmbeddedView() method).

  /*
  <ul *appTimes=5>
    <li></li>
  </ul>

  ul: viewContainer,
  li: template
  */
  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) { }

}
