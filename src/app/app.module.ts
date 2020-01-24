// #region infrastructure
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
// #endregion

// #region base
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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

import { PersonManagementComponent } from '@component/practice/person-management/person-management.component';
import { PersonInfoComponent } from '@component/practice/person-info/person-info.component';
import { PersonGridComponent } from '@component/practice/person-grid/person-grid.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { NgClassExampleComponent } from '@component/ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from '@component/ng-style-example/ng-style-example.component';
import { TemplateDrivenFormComponent } from '@component/template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './component/model-driven-form/model-driven-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonManagementComponent,
    PersonInfoComponent,
    PersonGridComponent,
    PipeExampleComponent,
    JalaliPipe,
    SqrtPipe,
    FilterPipe,
    PersonPipe,
    AsyncPipeExampleComponent,
    StyleExampleComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
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
