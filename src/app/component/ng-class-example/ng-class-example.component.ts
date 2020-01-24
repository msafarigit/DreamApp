import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.scss']
})
export class NgClassExampleComponent implements OnInit {

  isSpecial = true;

  constructor() { }

  ngOnInit() {
  }

}
