import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html'
})
export class PipeExampleComponent implements OnInit {

  title = 'Sample Pipe Demo';
  todayDate = new Date();

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  jsonval = { name: 'سعید', age: '34', address: { a1: 'ونک', a2: 'تهران - ملاصدرا' } };

  months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

  numberValue = 0;

  devTitle = 'Mr.';
  devName = '';
  devLName = '';
  titleFilter = 'Mr.';

  // tslint:disable-next-line: variable-name
  _items = [
    { title: 'Mr.', first: 'Saeid', last: 'Rastak' },
    { title: 'Mr.', first: 'Hamid', last: 'Tamana' },
    { title: 'Mr.', first: 'Javad', last: 'Manesh' },
    { title: 'Mrs.', first: 'Fariba', last: 'Taheri' }
  ];

  items$ = new BehaviorSubject<any[]>([]);

  constructor() {
  }

  ngOnInit() {
    this.items$.next(this._items);
  }

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  changeToggle() {
    this.toggle = !this.toggle;
  }

  get items() {
    return this.items$.asObservable();
  }

  addDeveloper() {
    // this._items.push({title: this.devTitle, first: this.devName, last: this.devLName});
    this._items = this._items.concat({ title: this.devTitle, first: this.devName, last: this.devLName });
    this.items$.next(this._items);
  }
}
