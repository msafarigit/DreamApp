import { Component, OnInit } from '@angular/core';
import { Person, PERSONS } from 'src/app/model/Person';

@Component({
  selector: 'app-person-management',
  templateUrl: './person-management.component.html',
  styleUrls: ['./person-management.component.scss']
})
export class PersonManagementComponent implements OnInit {

  personList: Person[];
  person: Person;

  constructor() {
    this.personList = PERSONS;
    this.person = new Person();
  }

  ngOnInit() {
  }

  addPerson(person: Person) {
    this.personList = this.personList.concat(person);
  }

  searchPerson(request: Person) {
    this.personList = this.personList.filter(person => request.name.trim() ? person.name === request.name.trim() : true)
      .filter(person => request.lastName.trim() ? person.lastName === request.lastName.trim() : true)
      .filter(person => request.age ? person.age === +request.age : true);
  }

  deletePerson(id: number) {
    // this.personList = this.personList.filter(person => id ? person.id !== id : true);

    const removedIndex = this.personList.findIndex(person => person.id === id);
    this.personList.splice(removedIndex, 1);
    this.personList = this.personList.concat([]);
  }

  selectPerson(id: number) {
    this.person = JSON.parse(JSON.stringify(this.findPerson(id)));
  }

  editPerson(person: Person) {
    const findPerson = this.findPerson(person.id);
    findPerson.name = person.name;
    findPerson.lastName = person.lastName;
    findPerson.age = person.age;
  }

  private findPerson(id: number): Person {
    const editIndex = this.personList.findIndex(person => person.id === id);
    return this.personList[editIndex];
  }
}
