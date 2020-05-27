import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { LifecycleRoutingModule } from './lifecycle-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LifecycleRoutingModule,
    // Then finally, in any feature module we can simply import the shared module without the forRoot and
    // we’ll have access to the shared pipes and directives without providing the service again.
    SharedModule
  ]
})
export class LifecycleModule { }
