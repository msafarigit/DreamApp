import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';

import { PersonPipe } from '@pipe/person.pipe';

import { PersonManagementComponent } from '@component/practice/person-management/person-management.component';
import { PersonInfoComponent } from '@component/practice/person-info/person-info.component';
import { PersonGridComponent } from '@component/practice/person-grid/person-grid.component';

@NgModule({
  declarations: [
    PersonManagementComponent,
    PersonInfoComponent,
    PersonGridComponent,
    PersonPipe,
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
