import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonManagementComponent } from '@component/practice/person-management/person-management.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { TemplateDrivenFormComponent } from '@component/template-driven-form/template-driven-form.component';


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
