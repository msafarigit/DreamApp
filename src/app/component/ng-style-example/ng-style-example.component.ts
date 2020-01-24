import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.scss']
})
export class NgStyleExampleComponent implements OnInit {

  isSpecial = true;

  constructor() { }

  ngOnInit() {
  }

}
