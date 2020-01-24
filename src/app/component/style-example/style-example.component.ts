import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-example',
  templateUrl: './style-example.component.html',
  styleUrls: ['./style-example.component.scss']
  // styles: ['h1 { font-weight: bold; }']
})
export class StyleExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*
The styles specified in @Component metadata apply only within the template of that component.
They are not inherited by any components nested within the template nor by any content projected into the component.
1- Styles in component metadata:    styles: ['h1 { font-weight: normal; }']
2- Style files in component metadata

3- Embeded style
4- Template link tags
    <link rel="stylesheet" href="../assets/hero-team.component.css">
5- CSS @imports
6- External and global style files
7- Non-CSS style files
*/

/*
Special selectors:
1- :host
Use the :host pseudo-class selector to target styles in the element that hosts the component
  (as opposed to targeting elements inside the component's template).

2- :host-context
Use the :host-context() pseudo-class selector, which works just like the function form of :host().
 The :host-context() selector looks for a CSS class in any ancestor of the component host element,
 up to the document root. The :host-context() selector is useful when combined with another selector.

3- (deprecated) /deep/, >>>, and ::ng-deep
Component styles normally apply only to the HTML in the component's own template.
Applying the ::ng-deep pseudo-class to any CSS rule completely disables view-encapsulation for that rule.
 Any style with ::ng-deep applied becomes a global style.
 Use /deep/, >>> and ::ng-deep only with emulated view encapsulation.
 Emulated is the default and most commonly used view encapsulation. 
 For more information, see the Controlling view encapsulation section.
*/
