import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading, ExtraOptions } from '@angular/router';

import { DelayPreloadingStrategy } from '@service/core/delay-preloading-strategy.service';

import { ModalComponent } from '@component/modal/modal.component';
import { TemplateReferenceVariableComponent } from '@component/template-reference-variable/template-reference-variable.component';
import { DatepickerJalaliComponent } from '@component/datepicker-jalali/datepicker-jalali.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { NotFoundComponent } from '@component/not-found/not-found.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  enableTracing: false, // <-- debugging purposes only, console log
  // scrollOffset: [0, 64],
  preloadingStrategy: DelayPreloadingStrategy
};

// router order provides priority of path!
const router: Routes = [
  { path: 'modal', component: ModalComponent },
  { path: 'templateReferenceVariable', component: TemplateReferenceVariableComponent },
  { path: 'datepicker-jalali', component: DatepickerJalaliComponent },
  {
    path: 'directive',
    loadChildren: () => import('@component/directive/directive.module').then(m => m.DirectiveModule),
    data: { preload: false }
  },
  {
    path: 'lifecycle',
    loadChildren: () => import('@component/lifecycle/lifecycle.module').then(m=> m.LifecycleModule)
  },
  {
    path: 'interaction',
    loadChildren: () => import('@component/interaction/interaction.module').then(m => m.InteractionModule),
    data: { preload: false }
  },
  {
    path: 'practice',
    loadChildren: () => import('@component/practice/practice.module').then(m => m.PracticeModule),
    data: { preload: true, delay: 8000 }
  },
  { path: 'style', component: StyleExampleComponent },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'asyncPipe', component: AsyncPipeExampleComponent },
  {
    path: 'form',
    loadChildren: () => import('@component/form/form.module').then(m => m.FormModule),
    data: { preload: false }
  },
  {
    path: 'rxjs',
    loadChildren: () => import('@component/rxjs/rxjs.module').then(m => m.RxjsModule),
    data: { preload: false }
  },
  {
    path: 'course',
    loadChildren: () => import('@component/course/course.module').then(m => m.CourseModule),
    data: { preload: false }
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(router, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
<base href>
This guide works with a CLI-generated Angular app. If you are working manually, make sure that you have <base href="/"> in the <head> of your index.html file.
This assumes that the app folder is the application root, and uses "/".
*/
