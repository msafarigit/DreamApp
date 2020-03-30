import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('class-names')
  classNames = '';

  constructor() { }

  ngOnInit(): void {
  }

}
