import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';


const router: Routes = [
  { path: 'modal', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    router,
    { enableTracing: true }) // <-- debugging purposes only    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
