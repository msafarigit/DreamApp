import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ParentVersionComponent } from './parent-version/parent-version.component';
import { ChildVersionComponent } from './child-version/child-version.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent/countdown-local-var-parent.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ComponentInteractionComponent,
    ParentVersionComponent,
    ChildVersionComponent,
    ClassRoomComponent,
    StudentInfoComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Shift + Alt + F
