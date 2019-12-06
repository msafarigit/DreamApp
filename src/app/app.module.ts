import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssessmentService } from './services/assessment.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonManagementComponent } from './practice/person-management/person-management.component';
import { PersonInfoComponent } from './practice/person-info/person-info.component';
import { PersonGridComponent } from './practice/person-grid/person-grid.component';
import { FormsModule } from '@angular/forms';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { JalaliPipe } from './pipes/jalali.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PersonPipe } from './pipes/person.pipe';
import { AsyncPipeExampleComponent } from './async-pipe-example/async-pipe-example.component';
import { StyleExampleComponent } from './style-example/style-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
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
