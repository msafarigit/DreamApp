import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PersonManagementComponent } from './practice/person-management/person-management.component';


const router: Routes = [
  { path: 'interaction', component: ComponentInteractionComponent },
  { path: 'practice', component: PersonManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    router,
    { enableTracing: false }) // <-- debugging purposes only, console log
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
