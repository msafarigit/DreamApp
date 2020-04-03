import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { HomeComponent } from '@component/form/home/home.component';
import { TemplateDrivenFormComponent } from '@component/form/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from '@component/form/model-driven-form/model-driven-form.component';
import { ModelDrivenFormNestedComponent } from '@component/form/model-driven-form-nested/model-driven-form-nested.component';


@NgModule({
  declarations: [
    HomeComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    ModelDrivenFormNestedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    SharedModule
  ]
})
export class FormModule { }
