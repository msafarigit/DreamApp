import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@component/form/home/home.component';
import { TemplateDrivenFormComponent } from '@component/form/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from '@component/form/model-driven-form/model-driven-form.component';
import { ModelDrivenFormNestedComponent } from '@component/form/model-driven-form-nested/model-driven-form-nested.component';
import { ModelDrivenValidatorComponent } from '@component/form/model-driven-validator/model-driven-validator.component';
import { ModelDrivenAsyncValidatorComponent } from '@component/form/model-driven-async-validator/model-driven-async-validator.component';
import { TemplateDrivenValidatorComponent } from '@component/form/template-driven-validator/template-driven-validator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'templateDrivenForm', component: TemplateDrivenFormComponent },
  { path: 'modelDrivenForm', component: ModelDrivenFormComponent },
  { path: 'modelDrivenFormNested', component: ModelDrivenFormNestedComponent },
  { path: 'modelDrivenValidator', component: ModelDrivenValidatorComponent },
  { path: 'modelDrivenAsyncValidator', component: ModelDrivenAsyncValidatorComponent },
  { path: 'templateDrivenValidator', component: TemplateDrivenValidatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
