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

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output()
  onVote: EventEmitter<boolean>;

  constructor() {
    this.onVote = new EventEmitter<boolean>();
    this.voted = false;
  }

  ngOnInit() {
  }

  vote(vote: boolean) {
    this.voted = true;
    this.onVote.emit(vote);
  }
}
