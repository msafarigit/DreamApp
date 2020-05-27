import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InteractionRoutingModule } from './interaction-routing.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from '@component/interaction/home/home.component';
import { ChildVersionComponent } from '@component/interaction/child-version/child-version.component';
import { ParentVersionComponent } from '@component/interaction/parent-version/parent-version.component';
import { StudentInfoComponent } from '@component/interaction/student-info/student-info.component';
import { ClassRoomComponent } from '@component/interaction/class-room/class-room.component';
import { CountdownTimerComponent } from '@component/interaction/countdown-timer/countdown-timer.component';
import { CountdownLocalVarParentComponent } from '@component/interaction/countdown-local-var-parent/countdown-local-var-parent.component';
import { CountdownViewChildParentComponent } from '@component/interaction/countdown-view-child-parent/countdown-view-child-parent.component';
import { CountdownQuerylistParentComponent } from '@component/interaction/countdown-querylist-parent/countdown-querylist-parent.component';
import { AssessmentDeveloperComponent } from '@component/interaction/assessment-developer/assessment-developer.component';
import { CustomTwoWayComponent } from '@component/interaction/custom-two-way/custom-two-way.component';
import { CustomTwoWayParentComponent } from '@component/interaction/custom-two-way-parent/custom-two-way-parent.component';
import { ClassAssessmentComponent } from '@component/interaction/class-assessment/class-assessment.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChildVersionComponent,
    ParentVersionComponent,
    ClassRoomComponent,
    StudentInfoComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    CountdownQuerylistParentComponent,
    ClassAssessmentComponent,
    AssessmentDeveloperComponent,
    CustomTwoWayComponent,
    CustomTwoWayParentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InteractionRoutingModule,
    // Then finally, in any feature module we can simply import the shared module without the forRoot and
    // we’ll have access to the shared pipes and directives without providing the service again.
    SharedModule
  ]
})
export class InteractionModule { }
