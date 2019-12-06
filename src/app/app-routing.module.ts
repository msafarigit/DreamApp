import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonManagementComponent } from './practice/person-management/person-management.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from './async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from './style-example/style-example.component';


const router: Routes = [
  { path: 'practice', component: PersonManagementComponent },
  { path: 'style', component: StyleExampleComponent },
  { path: 'templateDrivenForm', component: TemplateDrivenFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    router,
    { enableTracing: false }) // <-- debugging purposes only, console log
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
