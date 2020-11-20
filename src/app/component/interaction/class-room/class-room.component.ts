import { Component, OnInit } from '@angular/core';
import { Person, PERSONS } from '@model/Person';

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.scss']
})
export class ClassRoomComponent implements OnInit {

  students: Person[];
  agree: number;
  disagree: number;

  constructor() {
    this.students = PERSONS;
    this.agree = 0;
    this.disagree = 0;
  }

  ngOnInit() { }

  studentVote(vote: boolean) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    vote ? this.agree++ : this.disagree++;
  }
}
