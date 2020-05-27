import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructuralDirectiveComponent } from '@component/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '@component/directive/attribute-directive/attribute-directive.component';
import { CustomDirectiveComponent } from '@component/directive/custom-directive/custom-directive.component';
import { NgContainerExampleComponent } from '@component/directive/ng-container-example/ng-container-example.component';
import { HomeComponent } from '@component/directive/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'structural', component: StructuralDirectiveComponent },
  { path: 'attribute', component: AttributeDirectiveComponent },
  { path: 'custom', component: CustomDirectiveComponent },
  { path: 'ng-container', component: NgContainerExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }
