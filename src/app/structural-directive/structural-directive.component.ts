import { Component, OnInit } from '@angular/core';
import { heroes } from '../model/Hero';

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

  constructor() { }

  ngOnInit() {
  }

}

// Structural directives are responsible for HTML layout.
// They shape or reshape the DOM's structure, typically by adding, removing, or manipulating elements.
// An asterisk (*) precedes the directive attribute name
