import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-two-way',
  templateUrl: './custom-two-way.component.html'
})
export class CustomTwoWayComponent implements OnInit {

  @Input()
  balance: number;
  @Output()
  balanceChange: EventEmitter<number>;

  constructor() {
    this.balanceChange = new EventEmitter<number>();
   }

  ngOnInit() {
  }

  withdraw(num: number) {
    this.balance -= num;
    this.balanceChange.emit(this.balance);
  }
}

/*
 Why is it named “BANANA IN A BOX”?
  the “BANANA IN A BOX” syntax [()] for Two-Way Data Binding.
  The naming assists us in remembering the order of the brackets of the Two-Way Data Binding.
    [] = box
    () = banana.
    [()] = banana in a box
*/

/*
 -Property binding:
   Property binding in Angular helps you set values for properties of HTML elements or directives.
  With property binding, you can do things such as toggle button functionality, set paths programmatically, and share values between components.
  To bind to an element's property, enclose it in square brackets, [], which identifies the property as a target property.
  A target property is the DOM property to which you want to assign a value. For example, the target property in the following code is the image element's src property.
   <img [src]="itemImageUrl">

  The brackets, [], cause Angular to evaluate the right-hand side of the assignment as a dynamic expression. Without the brackets,
  Angular treats the the right-hand side as a string literal and sets the property to that static value.

 -Attribute, class, and style bindings:
   Attribute binding in Angular helps you set values for attributes directly. With attribute binding, you can improve accessibility,
  style your application dynamically, and manage multiple CSS classes or styles simultaneously.
  Attribute binding syntax resembles property binding, but instead of an element property between brackets,
  you precede the name of the attribute with the prefix attr, followed by a dot. Then, you set the attribute value with an expression
  that resolves to a string.
   <p [attr.attribute-you-are-targeting]="expression"></p>
  When the expression resolves to null, Angular removes the attribute altogether.

   <!--  expression calculates colspan=2 -->
   <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>

   [style.width]="width"
   [style.width.px]="width"

   [class.sale]="onSale"

 -Event binding:
   Event binding allows you to listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.
  To bind to an event you use the Angular event binding syntax. This syntax consists of a target event name within parentheses to the
  left of an equal sign, and a quoted template statement to the right.
*/
