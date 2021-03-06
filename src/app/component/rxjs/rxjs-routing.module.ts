import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from '@component/rxjs/map/map.component';
import { SchedulerComponent } from '@component/rxjs/scheduler/scheduler.component';
import { AsyncSchedulerComponent } from '@component/rxjs/async-scheduler/async-scheduler.component';
import { AsapSchedulerComponent } from '@component/rxjs/asap-scheduler/asap-scheduler.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'asyncScheduler', component: AsyncSchedulerComponent },
  { path: 'asapScheduler', component: AsapSchedulerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
