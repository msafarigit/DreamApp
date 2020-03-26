import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomDirectiveComponent } from './component/custom-directive/custom-directive.component';
import { NgContainerExampleComponent } from '@component/ng-container-example/ng-container-example.component';
import { ModelDrivenFormComponent } from './component/model-driven-form/model-driven-form.component';
import { ComponentInteractionComponent } from '@component/component-interaction/component-interaction.component';
import { PersonManagementComponent } from '@component/practice/person-management/person-management.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { TemplateDrivenFormComponent } from '@component/template-driven-form/template-driven-form.component';
import { NotFoundComponent } from '@component/not-found/not-found.component';


// router order provides priority of path!
const router: Routes = [
  { path: 'custom-directives', component: CustomDirectiveComponent },
  { path: 'structural', component: NgContainerExampleComponent },
  { path: 'interaction', component: ComponentInteractionComponent },
  { path: 'practice', component: PersonManagementComponent },
  { path: 'style', component: StyleExampleComponent },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'asyncPipe', component: AsyncPipeExampleComponent },
  { path: 'templateDrivenForm', component: TemplateDrivenFormComponent },
  { path: 'modelDrivenForm', component: ModelDrivenFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(router, { enableTracing: false }) // <-- debugging purposes only, console log
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
