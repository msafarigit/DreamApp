import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  // This tells Angular to provide the service in the application root.
  providedIn: 'root'
})
export class AssessmentService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  assessmentAssigned$ = this.missionAnnouncedSource.asObservable();
  assessmentConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  acceptAssessment(developer: string) {
    this.missionConfirmedSource.next(developer);
  }
}
