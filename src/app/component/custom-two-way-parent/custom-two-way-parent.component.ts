import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-two-way-parent',
  template: `
    <p>Hello {{username}}!</p>
    <input type="text" [value]="username" (input)="username = $event.target.value"/>&nbsp;
    <button class="btn btn-success" (click)="changeUsername()">Change Username</button>
    <br />
    <p>Hello {{name}}!</p>
    <input type="text" [(ngModel)]="name"/>&nbsp;
    <button class="btn btn-success" (click)="changeName()">Change Name</button>
    <hr />
    <h3>Parent: {{amount}}</h3>
    <button type="button" class="btn btn-primary" (click)="deposit(100)">Deposit By 100</button>
    <br />
    <!-- <app-custom-two-way [balance]="amount" (balanceChange)="amount=$event"></app-custom-two-way> -->
    <app-custom-two-way [(balance)]="amount"></app-custom-two-way>
  `
})
export class CustomTwoWayParentComponent implements OnInit {

  amount = 0;
  username = '';
  name = '';

  constructor() { }

  ngOnInit() {
  }

  changeUsername() {
    this.username = 'developer';
  }

  changeName() {
    this.name = 'ahmad';
  }

  deposit(num: number) {
    this.amount += num;
  }
}

// [value]=“username” - Binds the expression username to the input element’s value property
// (input)=“expression” - Is a declarative way of binding an expression to the input element’s input event (yes there’s such event)