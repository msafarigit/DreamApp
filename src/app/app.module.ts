// #region infrastructure
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
// #endregion

// #region base
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { AppComponent } from './app.component';
// #endregion

// #region pipe
import { JalaliPipe } from '@pipe/jalali.pipe';
import { SqrtPipe } from '@pipe/sqrt.pipe';
import { FilterPipe } from '@pipe/filter.pipe';
import { PersonPipe } from '@pipe/person.pipe';
// #endregion

// #region service
import { AssessmentService } from '@service/assessment.service';
// #endregion

import { ChildVersionComponent } from '@component/child-version/child-version.component';
import { ParentVersionComponent } from '@component/parent-version/parent-version.component';
import { PersonManagementComponent } from '@component/practice/person-management/person-management.component';
import { PersonInfoComponent } from '@component/practice/person-info/person-info.component';
import { PersonGridComponent } from '@component/practice/person-grid/person-grid.component';
import { ComponentInteractionComponent } from '@component/component-interaction/component-interaction.component';
import { CountdownTimerComponent } from '@component/countdown-timer/countdown-timer.component';
import { CountdownLocalVarParentComponent } from '@component/countdown-local-var-parent/countdown-local-var-parent.component';
import { CountdownQuerylistParentComponent } from '@component/countdown-querylist-parent/countdown-querylist-parent.component';
import { CountdownViewChildParentComponent } from '@component/countdown-view-child-parent/countdown-view-child-parent.component';
import { AssessmentDeveloperComponent } from '@component/assessment-developer/assessment-developer.component';
import { CustomTwoWayComponent } from '@component/custom-two-way/custom-two-way.component';
import { CustomTwoWayParentComponent } from '@component/custom-two-way-parent/custom-two-way-parent.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { NgClassExampleComponent } from '@component/ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from '@component/ng-style-example/ng-style-example.component';
import { NgContainerExampleComponent } from '@component/ng-container-example/ng-container-example.component';
import { TemplateDrivenFormComponent } from '@component/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './component/model-driven-form/model-driven-form.component';
import { ClassAssessmentComponent } from '@component/class-assessment/class-assessment.component';
import { TimesDirective } from './directive/times.directive';
import { ClassDirective } from './directive/class.directive';
import { CustomDirectiveComponent } from './component/custom-directive/custom-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    TimesDirective,
    ClassDirective,
    CustomDirectiveComponent,
    ChildVersionComponent,
    ParentVersionComponent,
    PersonManagementComponent,
    PersonInfoComponent,
    PersonGridComponent,
    ComponentInteractionComponent,
    ClassAssessmentComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownQuerylistParentComponent,
    CountdownViewChildParentComponent,
    AssessmentDeveloperComponent,
    CustomTwoWayComponent,
    CustomTwoWayParentComponent,
    PipeExampleComponent,
    JalaliPipe,
    SqrtPipe,
    FilterPipe,
    PersonPipe,
    AsyncPipeExampleComponent,
    StyleExampleComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent,
    NgContainerExampleComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NavbarModule
  ],
  providers: [AssessmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Shift + Alt + F

/*
If a component, directive, or pipe belongs to a module in the imports array, don't​ re-declare it in the declarations array.
If you wrote it and it should belong to this module, ​do​ declare it in the declarations array.
*/
