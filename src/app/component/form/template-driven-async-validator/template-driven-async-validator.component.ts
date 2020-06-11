import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-async-validator',
  templateUrl: './template-driven-async-validator.component.html',
  styleUrls: ['./template-driven-async-validator.component.scss']
})
export class TemplateDrivenAsyncValidatorComponent implements OnInit {

  login: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    console.log(event);
  }

}
