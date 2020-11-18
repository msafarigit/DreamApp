import { NgForOf } from '@angular/common';
import { Directive, Host, Input } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ngForTrackByField]'
})
export class NgForTrackByFieldDirective<T> {

  @Input()
  public ngForTrackByField: keyof T;

  constructor(@Host() ngFor: NgForOf<T>) {
    ngFor.ngForTrackBy = (index: number, item: T) => {
      if (this.ngForTrackByField) {
        return item[this.ngForTrackByField];
      }
      return item;
    };
  }

}
