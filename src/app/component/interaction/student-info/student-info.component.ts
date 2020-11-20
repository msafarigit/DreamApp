import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '@model/Person';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

  student: Person;
  voted: boolean;

  @Input()
  set Student(student: Person) {
    this.student = student;
  }
  get Student(): Person {
    return this.student;
  }

  @Output()
  onVote: EventEmitter<boolean>;

  constructor() {
    this.onVote = new EventEmitter<boolean>();
    this.voted = false;
  }

  ngOnInit() {  }

  vote(vote: boolean) {
    this.voted = true;
    this.onVote.emit(vote);
  }
}

/*
 Initializing a component or directive:
 Use the ngOnInit() method to perform the following initialization tasks:
  1- Perform complex initializations outside of the constructor. Components should be cheap and safe to construct.
   You should not, for example, fetch data in a component constructor.
   You shouldn't worry that a new component will try to contact a remote server when created under test or before you decide to display it.
   An ngOnInit() is a good place for a component to fetch its initial data. For an example, see the Tour of Heroes tutorial.

   url:http://misko.hevery.com/code-reviewers-guide/flaw-constructor-does-real-work/
   In Flaw: Constructor does Real Work, Misko Hevery, Angular team lead, explains why you should avoid complex constructor logic.

  2- Set up the component after Angular sets the input properties. Constructors should do no more than set the initial local variables to simple values.
   Keep in mind that a directive's data-bound input properties are not set until after construction.
   If you need to initialize the directive based on those properties, set them when ngOnInit() runs.
   The ngOnChanges() method is your first opportunity to access those properties.
   Angular calls ngOnChanges() before ngOnInit(), but also many times after that. It only calls ngOnInit() once.
*/
