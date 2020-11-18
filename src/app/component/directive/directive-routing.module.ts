import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StructuralDirectiveComponent } from '@component/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '@component/directive/attribute-directive/attribute-directive.component';
import { CustomDirectiveComponent } from '@component/directive/custom-directive/custom-directive.component';
import { NgContainerExampleComponent } from '@component/directive/ng-container-example/ng-container-example.component';
import { NgForExtendComponent } from '@component/directive/ng-for-extend/ng-for-extend.component';
import { HomeComponent } from '@component/directive/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'structural', component: StructuralDirectiveComponent },
  { path: 'attribute', component: AttributeDirectiveComponent },
  { path: 'custom', component: CustomDirectiveComponent },
  { path: 'ng-container', component: NgContainerExampleComponent },
  { path: 'ng-for-extend', component: NgForExtendComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }
