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
import { CustomTwoWayComponent } from './custom-two-way/custom-two-way.component';
import { CustomTwoWayParentComponent } from './custom-two-way-parent/custom-two-way-parent.component';
import { FormsModule } from '@angular/forms';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { JalaliPipe } from './pipes/jalali.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonManagementComponent,
    PersonInfoComponent,
    PersonGridComponent,
    CustomTwoWayComponent,
    CustomTwoWayParentComponent,
    PipeExampleComponent,
    JalaliPipe,
    SqrtPipe,
    FilterPipe,


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
