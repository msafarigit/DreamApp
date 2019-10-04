import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';


const router: Routes = [
  { path: 'modal', component: ModalComponent },
  { path: 'structural', component: StructuralDirectiveComponent },
  { path: 'attribute', component: AttributeDirectiveComponent },
  { path: 'templateReferenceVariable', component: TemplateReferenceVariableComponent },
  { path: 'lifecycle', component: LifecycleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    router,
    { enableTracing: false }) // <-- debugging purposes only, console log
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
