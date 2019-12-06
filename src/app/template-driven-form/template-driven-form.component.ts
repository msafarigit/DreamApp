import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*
There are two changes:
  1- You import FormsModule.
  2- You add the FormsModule to the list of imports defined in the @NgModule decorator.
     This gives the application access to all of the template-driven forms features, including ngModel.
*/
