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
import { TemplateReferenceVariableComponent } from '@component/template-reference-variable/template-reference-variable.component';
import { DatepickerJalaliComponent } from '@component/datepicker-jalali/datepicker-jalali.component';
import { PipeExampleComponent } from '@component/pipe-example/pipe-example.component';
import { AsyncPipeExampleComponent } from '@component/async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from '@component/style-example/style-example.component';
import { NgClassExampleComponent } from '@component/ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from '@component/ng-style-example/ng-style-example.component';
import { NotFoundComponent } from '@component/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TemplateReferenceVariableComponent,
    DatepickerJalaliComponent,
    PipeExampleComponent,
    JalaliPipe,
    SqrtPipe,
    FilterPipe,
    AsyncPipeExampleComponent,
    StyleExampleComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent,
    NotFoundComponent

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

/*
url: https://www.typescriptlang.org/
Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.
Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc.
declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms.
Conversely, to consume a variable, function, class, interface, etc.
exported from a different module, it has to be imported using one of the import forms.

Module imports are resolved differently based on whether the module reference is relative or non-relative.
A relative import is one that starts with /, ./ or ../. Some examples include:
  import Entry from "./components/Entry";
Any other import is considered non-relative. Some examples include:
  import * as $ from "jquery";
  import { Component } from "@angular/core";
*/

/*
If a component, directive, or pipe belongs to a module in the imports array, don't​ re-declare it in the declarations array.
If you wrote it and it should belong to this module, ​do​ declare it in the declarations array.
*/

/*
HttpClientModule:
 Configures the dependency injector for HttpClient with supporting services for XSRF. Automatically imported by HttpClientModule.
*/
