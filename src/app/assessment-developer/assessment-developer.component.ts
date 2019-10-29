import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AssessmentService } from '../services/assessment.service';

@Component({
  selector: 'app-assessment-developer',
  template: `
    <p>
      {{developer}}: <strong>{{assessment}}</strong>
      <button class="btn btn-primary" (click)="accept()" [disabled]="!assigned || confirmed">Confirm</button>
    </p>
  `,
  styleUrls: ['./assessment-developer.component.scss']
})
export class AssessmentDeveloperComponent implements OnInit, OnDestroy {
  @Input()
  developer: string;

  assessment = '<no assessment assigned>'; // ارزیابی
  confirmed = false;
  assigned = false;
  subscription: Subscription;

  constructor(private assessmentService: AssessmentService) {
    this.subscription = assessmentService.assessmentAssigned$.subscribe(assessment => {
      this.assessment = assessment;
      this.assigned = true;
      this.confirmed = false;
    });
  }

  ngOnInit() {
  }

  accept() {
    this.confirmed = true;
    this.assessmentService.acceptAssessment(this.developer);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
