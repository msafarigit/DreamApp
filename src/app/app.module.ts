// #region infrastructure
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
// #endregion

// #region base
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
// #endregion

// #region pipe
import { JalaliPipe } from '@pipe/jalali.pipe';
import { SqrtPipe } from '@pipe/sqrt.pipe';
import { FilterPipe } from '@pipe/filter.pipe';
// #endregion

// #region service
import { AssessmentService } from '@service/assessment.service';
// #endregion

import { ModalComponent } from '@component/modal/modal.component';
import { DatepickerJalaliComponent } from '@component/datepicker-jalali/datepicker-jalali.component';
import { ChildVersionComponent } from '@component/child-version/child-version.component';
import { ParentVersionComponent } from '@component/parent-version/parent-version.component';
import { ClassRoomComponent } from '@component/class-room/class-room.component';
import { StudentInfoComponent } from '@component/student-info/student-info.component';
import { CountdownTimerComponent } from '@component/countdown-timer/countdown-timer.component';
import { CountdownLocalVarParentComponent } from '@component/countdown-local-var-parent/countdown-local-var-parent.component';
import { CountdownViewChildParentComponent } from '@component/countdown-view-child-parent/countdown-view-child-parent.component';
import { CountdownQuerylistParentComponent } from '@component/countdown-querylist-parent/countdown-querylist-parent.component';
import { ComponentInteractionComponent } from '@component/component-interaction/component-interaction.component';
import { AssessmentDeveloperComponent } from '@component/assessment-developer/assessment-developer.component';
import { CustomTwoWayComponent } from '@component/custom-two-way/custom-two-way.component';
import { CustomTwoWayParentComponent } from '@component/custom-two-way-parent/custom-two-way-parent.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { NgClassExampleComponent } from '@component/ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from '@component/ng-style-example/ng-style-example.component';
import { NgContainerExampleComponent } from '@component/ng-container-example/ng-container-example.component';
import { ClassAssessmentComponent } from '@component/class-assessment/class-assessment.component';
import { CustomDirectiveComponent } from '@component/custom-directive/custom-directive.component';
import { NotFoundComponent } from '@component/not-found/not-found.component';


@NgModule({
  declarations: [
    ModalComponent,
    DatepickerJalaliComponent,
    AppComponent,
    CustomDirectiveComponent,
    ChildVersionComponent,
    ParentVersionComponent,
    ClassRoomComponent,
    StudentInfoComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    CountdownQuerylistParentComponent,
    ClassAssessmentComponent,
    ComponentInteractionComponent,
    AssessmentDeveloperComponent,
    CustomTwoWayComponent,
    CustomTwoWayParentComponent,
    PipeExampleComponent,
    JalaliPipe,
    SqrtPipe,
    FilterPipe,
    AsyncPipeExampleComponent,
    StyleExampleComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent,
    NgContainerExampleComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NavbarModule,
    SharedModule.forRoot()

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

/*
HttpClientModule:
 Configures the dependency injector for HttpClient with supporting services for XSRF. Automatically imported by HttpClientModule.
*/
