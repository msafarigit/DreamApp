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
