import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from '@component/rxjs/map/map.component';
import { SchedulerComponent } from '@component/rxjs/scheduler/scheduler.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'scheduler', component: SchedulerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
