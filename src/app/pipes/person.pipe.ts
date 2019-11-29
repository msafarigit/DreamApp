import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../model/Person';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(personList: Array<Person>, ...args: any[]): any {
    if (args && Array.isArray(args)) {
      const request = args.pop() as Person;
      if (request) {
        personList = personList.filter(person => request.name.trim() ? person.name === request.name.trim() : true)
          .filter(person => request.lastName.trim() ? person.lastName === request.lastName.trim() : true)
          .filter(person => request.age ? person.age === +request.age : true);
      }
    }
    return personList;
  }

}
