import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DirectiveRoutingModule } from './directive-routing.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from '@component/directive/home/home.component';
import { StructuralDirectiveComponent } from '@component/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '@component/directive/attribute-directive/attribute-directive.component';
import { CustomDirectiveComponent } from '@component/directive/custom-directive/custom-directive.component';
import { NgContainerExampleComponent } from '@component/directive/ng-container-example/ng-container-example.component';


@NgModule({
  declarations: [
    HomeComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    CustomDirectiveComponent,
    NgContainerExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveRoutingModule,
    // Then finally, in any feature module we can simply import the shared module without the forRoot and
    // we’ll have access to the shared pipes and directives without providing the service again.
    SharedModule
  ]
})
export class DirectiveModule { }
