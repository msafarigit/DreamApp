import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-person-grid',
  templateUrl: './person-grid.component.html',
  styleUrls: ['./person-grid.component.scss']
})
export class PersonGridComponent implements OnInit {

  @Input()
  dataSource: Person[];

  @Output()
  deletePerson: EventEmitter<number>;
  @Output()
  selectPerson: EventEmitter<number>;

  constructor() {
    this.deletePerson = new EventEmitter<number>();
    this.selectPerson = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  delete(id: number) {
    this.deletePerson.emit(id);
  }

  select(id: number) {
    this.selectPerson.emit(id);
  }
}
