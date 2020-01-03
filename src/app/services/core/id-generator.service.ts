import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {

  currentValue: number;

  constructor() {
    this.currentValue = 5;
  }

  next(): number { return ++this.currentValue; }
}
