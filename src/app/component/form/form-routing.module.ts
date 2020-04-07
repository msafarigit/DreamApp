import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenFormComponent } from '@component/form/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from '@component/form/model-driven-form/model-driven-form.component';
import { ModelDrivenFormNestedComponent } from '@component/form/model-driven-form-nested/model-driven-form-nested.component';
import { ModelDrivenValidatorComponent } from './model-driven-validator/model-driven-validator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'templateDrivenForm', component: TemplateDrivenFormComponent },
  { path: 'modelDrivenForm', component: ModelDrivenFormComponent },
  { path: 'modelDrivenFormNested', component: ModelDrivenFormNestedComponent },
  { path: 'modelDrivenValidator', component: ModelDrivenValidatorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
