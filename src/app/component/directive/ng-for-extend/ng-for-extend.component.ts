import { Component, OnInit } from '@angular/core';
import { Hero, heroes } from '@model/Hero';

@Component({
  selector: 'app-ng-for-extend',
  templateUrl: './ng-for-extend.component.html',
  styleUrls: ['./ng-for-extend.component.scss']
})
export class NgForExtendComponent implements OnInit {

  heroes = heroes;

  constructor() { }

  ngOnInit(): void {
  }

  trackById(hero: Hero) {
    return hero.id;
  }

}

/*
<li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>

<ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
  <li>...</li>
</ng-template>
*/
