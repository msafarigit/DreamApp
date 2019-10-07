import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const router: Routes = [
  // { path: 'modal', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    router,
    { enableTracing: false }) // <-- debugging purposes only, console log
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
