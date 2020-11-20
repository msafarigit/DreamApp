/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck } from '@angular/core';
import { Person } from '@model/Person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck {

  @Input() person: Person;
  @Input() master: string;

  changeLog: string[];
  private oldPersonName: string;
  private oldMaster: string;
  private changeDetected = false;
  private noChangeCount = 0;

  constructor() {
    this.changeLog = [];
    this.changeLog.push(`constructor: person value ${this.person}`); // person has undefined
  }

  // ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
  ngOnChanges(changes: SimpleChanges): void {
    // this.changeLog.push(`ngOnChanges: person value ${JSON.stringify(this.person)}`); // person has value

    for (const inputName in changes) {
      if (changes.hasOwnProperty(inputName)) {
        const change = changes[inputName];
        const prevValue = JSON.stringify(change.previousValue);
        const currentValue = JSON.stringify(change.currentValue);

        if (change.isFirstChange()) {
          this.changeLog.push(`ngOnChanges isFirstChange: ${inputName}, Initial value ${prevValue} -----> ${currentValue}`);
        } else {
          this.changeLog.push(`ngOnChanges: ${inputName}, Initial value ${prevValue} -----> ${currentValue}`);
        }
      }
    }
  }

  ngOnInit(): void {
    this.changeLog.push(`ngOnInit: person value ${JSON.stringify(this.person)}`);
  }

  ngDoCheck(): void {
    if (this.person.name !== this.oldPersonName) {
      this.changeDetected = true;
      this.changeLog.push(`ngDoCheck: PersonName ${this.oldPersonName} ---> ${this.person.name}`);
      this.oldPersonName = this.person.name;
    }

    if (this.master !== this.oldMaster) {
      this.changeDetected = true;
      this.changeLog.push(`ngDoCheck: Master ${this.oldMaster} ---> ${this.master}`);
      this.oldMaster = this.master;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      const count = this.noChangeCount += 1;
      const noChangeMsg = `ngDoCheck: called ${count} with no change`;

      if (count === 1) {
        this.changeLog.push(noChangeMsg);
      } else {
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }
}
