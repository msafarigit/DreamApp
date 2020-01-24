import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Person } from '@model/Person';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent {

  @Input()
  person;

  @Output()
  addPerson: EventEmitter<Person>;
  @Output()
  searchPerson: EventEmitter<object>;
  @Output()
  editPerson: EventEmitter<Person>;

  constructor() {
    this.addPerson = new EventEmitter<Person>();
    this.searchPerson = new EventEmitter<object>();
    this.editPerson = new EventEmitter<Person>();
  }

  add(name: string, lastName: string, age: string) {
    const person = new Person(Math.random(), name, lastName, +age);
    this.addPerson.emit(person);
  }

  search(name: string, lastName: string, age: number) {
    this.searchPerson.emit({ name, lastName, age });
  }

  edit(person: Person) {
    this.editPerson.emit(person);
  }
}
/*
This code sets the <input> value property by binding to the name property.
To listen for changes to the value, the code binds to the input event of the <input> element.
When the user makes changes, the input event is raised,
and the binding executes the statement within a context that includes the DOM event object, $event.
To update the name property, the changed text is retrieved by following the path $event.target.value.
If the event belongs to a directive—recall that components are directives—$event has whatever shape the directive produces.
*/
