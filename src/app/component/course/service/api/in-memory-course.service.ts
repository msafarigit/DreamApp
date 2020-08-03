import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryCourseService implements InMemoryDbService {
  // uncomment this function to force an error
  // protected get(interceptorArgs: HttpMethodInterceptorArgs) {
  //   let resp = createErrorResponse(500, 'this is a forced error from the in-memory api');
  //   return createObservableResponse(resp);
  // }

  /*
   Creates fresh copy of data each time.
   Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    const courses = [
      {
        id: 1,
        name: 'Building Apps with React',
        topic: 'ReactJS'
      },
      {
        id: 2,
        name: 'Building Apps with Angular',
        topic: 'AngularJS'
      },
      {
        id: 3,
        name: 'Building Apps with Angular and Redux',
        topic: 'Angular and Redux'
      }
    ];

    return { courses };
  }
}

/*
 Create an InMemoryDataService class that implements InMemoryDbService.
 At minimum it must implement createDb which creates a "database" hash whose keys are collection names
 and whose values are arrays of collection objects to return or update.
*/
