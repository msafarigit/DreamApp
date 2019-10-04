import { Component, OnInit, OnChanges, DoCheck, Input } from '@angular/core';
import { Person } from '../model/Person';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnChanges, OnInit, DoCheck {

  @Input() contact: Person;
  @Input() master: string;

  changeLog: string[] = [];
  private oldContactName: string;
  private oldMaster: string;
  private changeDetected = false;
  private noChangeCount = 0;

  constructor() { }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    // tslint:disable-next-line: forin
    for (const inputName in changes) { // [master], [contact]
      const change = changes[inputName];
      let prevValue = JSON.stringify(change.previousValue);
      let currentValue = JSON.stringify(change.currentValue);

      if (change.isFirstChange()) {
        this.changeLog.push(`ngOnChanges: ${inputName} - Initial value ${prevValue} -----> ${currentValue}`);
      } else {
        this.changeLog.push(`ngOnChanges: ${inputName} - Initial value ${prevValue} -----> ${currentValue}`);
      }
    }
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
    if (this.contact.name !== this.oldContactName) {
      this.changeDetected = true;
      this.changeLog.push(`ngDoCheck: ContactName ${this.oldContactName} ---> ${this.contact.name}`);
      this.oldContactName = this.contact.name;
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
