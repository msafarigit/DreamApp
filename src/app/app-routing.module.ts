import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading, ExtraOptions } from '@angular/router';

import { DelayPreloadingStrategy } from '@service/core/delay-preloading-strategy.service';

import { CustomDirectiveComponent } from './component/custom-directive/custom-directive.component';
import { NgContainerExampleComponent } from '@component/ng-container-example/ng-container-example.component';
import { ComponentInteractionComponent } from '@component/component-interaction/component-interaction.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { TemplateDrivenFormComponent } from '@component/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './component/model-driven-form/model-driven-form.component';
import { ModelDrivenFormNestedComponent } from '@component/model-driven-form-nested/model-driven-form-nested.component';
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
  { path: 'custom-directives', component: CustomDirectiveComponent },
  { path: 'structural', component: NgContainerExampleComponent },
  { path: 'interaction', component: ComponentInteractionComponent },
  {
    path: 'practice', loadChildren: () => import('@component/practice/practice.module').then(m => m.PracticeModule),
    data: { preload: true, delay: 8000 }
  },
  { path: 'style', component: StyleExampleComponent },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'asyncPipe', component: AsyncPipeExampleComponent },
  { path: 'templateDrivenForm', component: TemplateDrivenFormComponent },
  { path: 'modelDrivenForm', component: ModelDrivenFormComponent },
  { path: 'modelDrivenFormNested', component: ModelDrivenFormNestedComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(router, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
