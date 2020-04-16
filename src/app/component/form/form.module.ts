import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from '@component/form/home/home.component';
import { TemplateDrivenFormComponent } from '@component/form/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from '@component/form/model-driven-form/model-driven-form.component';
import { ModelDrivenFormNestedComponent } from '@component/form/model-driven-form-nested/model-driven-form-nested.component';
import { ModelDrivenValidatorComponent } from '@component/form/model-driven-validator/model-driven-validator.component';
import { TemplateDrivenValidatorComponent } from '@component/form/template-driven-validator/template-driven-validator.component';
import { ModelDrivenAsyncValidatorComponent } from './model-driven-async-validator/model-driven-async-validator.component';

@NgModule({
  declarations: [
    HomeComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    ModelDrivenFormNestedComponent,
    ModelDrivenValidatorComponent,
    TemplateDrivenValidatorComponent,
    ModelDrivenAsyncValidatorComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule
  ]
})
export class FormModule { }
