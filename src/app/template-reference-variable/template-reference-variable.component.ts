import { Component, OnInit } from '@angular/core';
import { Person } from '../model/Person';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.scss']
})
export class TemplateReferenceVariableComponent implements OnInit {

  persons: Person[] = [];

  constructor() {
    this.persons = [
      new Person(1, 'ali', 'alavi', 25),
      new Person(2, 'saeed', 'saeedi', 35),
      new Person(3, 'nima', 'nimaei', 50)
    ];
  }

  ngOnInit() {
  }

  savePerson(id: HTMLInputElement, name: HTMLInputElement, lastName: HTMLInputElement) {
    if (+(id.value) === 0) {
      this.persons.push(new Person(this.persons.length + 1, name.value, lastName.value, 25));
    } else {
      this.persons.forEach((v, i, a) => {
        if (v.id === +(id.value)) {
          v.name = name.value;
          v.lastName = lastName.value;
        }
      });
    }
  }

  deletePerson(person: Person) {
    this.persons = this.persons.filter(p => p.id !== person.id);

    /*
      let removeIndex = -1;
      this.persons.forEach((value,index,array){
        if(removeIndex != -1)
          this.persons.splice(removeIndex,deleteCount:1);
      })
    */
  }

  onKeyEnter(eventArgs: KeyboardEvent) {
    console.log(eventArgs.target);
    alert((eventArgs.target as HTMLInputElement).value);
    // (<HTMLInputElement>eventArgs.target).value;
    // eventArgs.target['value'];
  }

  onMouseLeave(eventArgs: MouseEvent) {
    alert((eventArgs.target as HTMLInputElement).value);
  }
}

// A template reference variable is often a reference to a DOM element within a template.
// It can also refer to a directive (which contains a component), an element, TemplateRef, or a web component.
// Use the hash symbol (#) to declare a reference variable.
