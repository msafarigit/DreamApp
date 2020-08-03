import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, finalize , map } from 'rxjs/operators';

import { CONFIG } from '../shared/config';
import { Course } from '../model/course';

// import { /* ExceptionService, */ SpinnerService } from '../blocks/blocks';
// import { CONFIG, MessageService } from '../shared/shared';

const coursesUrl = CONFIG.baseUrls.courses;

// @Injectable({
//   providedIn: CourseModule
// })
@Injectable()
export class CourseService {
  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get('/api/courses', { observe: 'response' })
      .pipe(
        map((response: HttpResponse<Course[]>) => response.body),
        catchError(this.handleError),
        finalize(() => console.log('get courses completed')));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}

/*
Injectable providedIn:
  Determines which injectors will provide the injectable, by either associating it with an @NgModule or other InjectorType,
  or by specifying that this injectable should be provided in one of the following injectors:
    - 'root' : The application-level injector in most apps.
    - 'platform' : A special singleton platform injector shared by all applications on the page.
    - 'any' : Provides a unique instance in each lazy loaded module while all eagerly loaded modules share one instance.

providedIn: Type<any> | 'root' | 'platform' | 'any' | null

Providing a singleton service:
There are two ways to make a service a singleton in Angular:
    1- Set the providedIn property of the @Injectable() to "root".
    2- Include the service in the AppModule or in a module that is only imported by the AppModule

*/
