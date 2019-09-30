import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';


const router: Routes = [
  { path: 'modal', component: ModalComponent },
  { path: 'structural', component: StructuralDirectiveComponent },
  { path: 'attribute', component: AttributeDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    router,
    { enableTracing: true }) // <-- debugging purposes only
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
