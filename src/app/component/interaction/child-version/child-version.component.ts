import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child-version',
  template: `
    <h3>Version: {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `,
  styleUrls: ['./child-version.component.scss']
})
export class ChildVersionComponent implements OnInit, OnChanges {

  @Input()
  minor: number;

  @Input()
  major: number;

  changeLog: Array<string> = []; // ReadonlyArray

  constructor() { }

  ngOnInit() {
  }

  // means: an object with keys of type string, each associated to a value of type SimpleChange.
  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    const log: string[] = [];

    // tslint:disable-next-line: forin
    for (const change in changes) {
      const changedInput = changes[change];
      const to = JSON.stringify(changedInput.currentValue);
      if (changedInput.isFirstChange()) {
        log.push(`Initial value of ${change} set to ${to}`);
      } else {
        const from = JSON.stringify(changedInput.previousValue);
        log.push(`${change} changed from ${from} to ${to}`);
      }
    }

    this.changeLog.push(log.join(', '));
  }

}
