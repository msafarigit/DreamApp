import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '@service/assessment.service';

@Component({
  selector: 'app-class-assessment',
  template: `
    <h2>Assessment Assignment</h2>
    <button (click)="announce()" class="btn btn-success">Start Your Assessment!</button>
    <app-assessment-developer *ngFor="let developer of developers" [developer]="developer"></app-assessment-developer>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
  styleUrls: ['./class-assessment.component.scss']
})
export class ClassAssessmentComponent implements OnInit {

  developers = ['Saeid Rastak', 'Hamid Majoni', 'Morteza Gerami'];

  history: string[] = [];
  assessments = ['Write Good Application!', 'Eat Less!', 'Work Hard!'];
  nextAssessment = 0;

  constructor(private missionService: AssessmentService) {
    missionService.assessmentConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  ngOnInit() { }

  announce() {
    const assessment = this.assessments[this.nextAssessment++];
    this.missionService.announceMission(assessment);
    this.history.push(`Assessment "${assessment}" announced`);

    if (this.nextAssessment >= this.assessments.length) {
      this.nextAssessment = 0;
    }
  }
}
