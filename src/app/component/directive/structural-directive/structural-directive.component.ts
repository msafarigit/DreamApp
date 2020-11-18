import { Component, OnInit } from '@angular/core';
import { heroes } from '@model/Hero';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

  heroes = heroes;
  hero = this.heroes[0];

  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  color;

  constructor() {  }

  ngOnInit() {  }
}

/*
 There are three kinds of directives in Angular:
  -Components—directives with a template.
  -Structural directives—change the DOM layout by adding and removing DOM elements.
  -Attribute directives—change the appearance or behavior of an element, component, or another directive.

 Structural directives are responsible for HTML layout. They shape or reshape the DOM's structure,
 typically by adding, removing, or manipulating elements. An asterisk (*) precedes the directive attribute name
*/

/*
Microsyntax:
The Angular microsyntax lets you configure a directive in a compact, friendly string. The microsyntax parser translates that string into
attributes on the <ng-template>:
 -The let keyword declares a template input variable that you reference within the template. The input variables in this example
  are hero, i, and odd. The parser translates let hero, let i, and let odd into variables named let-hero, let-i, and let-odd.

 -The microsyntax parser title-cases all directives and prefixes them with the directive's attribute name, such as ngFor.
  For example, the ngFor input properties, of and trackBy, become ngForOf and ngForTrackBy, respectively.
  That's how the directive learns that the list is heroes and the track-by function is trackById.

 -As the NgFor directive loops through the list, it sets and resets properties of its own context object.
  These properties can include, but aren't limited to, index, odd, and a special property named $implicit.

 -The let-i and let-odd variables were defined as let i=index and let odd=odd. Angular sets them to the current value of the
  context's index and odd properties.

 -The context property for let-hero wasn't specified. Its intended source is implicit. Angular sets let-hero to the value of the
  context's $implicit property, which NgFor has initialized with the hero for the current iteration.

 -The NgFor API guide describes additional NgFor directive properties and context properties.

 -The NgForOf directive implements NgFor. Read more about additional NgForOf directive properties and context properties in the NgForOf API reference.

 Microsyntax	                                                        Desugared
 *ngFor="let item of [1,2,3]"	                                        <ng-template ngFor let-item [ngForOf]="[1,2,3]">
 *ngFor="let item of [1,2,3] as items; trackBy: myTrack; index as i"	<ng-template ngFor let-item [ngForOf]="[1,2,3]" let-items="ngForOf" [ngForTrackBy]="myTrack" let-i="index">
*/

/*
The <ng-template>:
 The <ng-template> is an Angular element for rendering HTML. It is never displayed directly.
 In fact, before rendering the view, Angular replaces the <ng-template> and its contents with a comment.
 If there is no structural directive and you merely wrap some elements in a <ng-template>, those elements disappear.
 That's the fate of the middle "Hip!" in the phrase "Hip! Hip! Hooray!".

 -first usage:
  <div class="lessons-list" *ngIf="lessons else loading">...</div>
  <ng-template #loading>
      <div>Loading...</div>
  </ng-template>

 -second usage:
 <ng-template [ngIf]="lessons" [ngIfElse]="loading">
   <div class="lessons-list">
     ...
   </div>
 </ng-template>

 <ng-template #loading>
     <div>Loading...</div>
 </ng-template>

 -third usage:
 <ng-template [ngIf]="hero">
    <div class="name">{{hero.name}}</div>
 </ng-template>
*/
