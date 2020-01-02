import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
