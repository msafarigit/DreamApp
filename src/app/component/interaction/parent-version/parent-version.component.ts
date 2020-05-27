import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-version',
  template: `
    <h2>Version Source Code</h2>
    <button class='btn btn-primary' (click)='newMinor()'>New minor version</button>
    <button class='btn btn-success' (click)='newMajor()'>New major version</button>
    <br />
    <app-child-version [major]="major" [minor]="minor"></app-child-version>
  `,
  styleUrls: ['./parent-version.component.scss']
})
export class ParentVersionComponent implements OnInit {

  minor = 0;
  major = 1;

  constructor() { }

  ngOnInit() {
  }

  newMinor(): void {
    this.minor++;
  }

  newMajor(): void {
    this.minor = 0;
    this.major++;
  }
}
