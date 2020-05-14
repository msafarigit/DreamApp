import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
