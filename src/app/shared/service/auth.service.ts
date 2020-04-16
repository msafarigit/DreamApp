import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  constructor() {
    console.log('hello');
  }

  // gotoPage(page: string, preserveParams = true) {

  //   const navigationExtras: NavigationExtras = {
  //     queryParamsHandling: preserveParams ? 'merge' : '', preserveFragment: preserveParams
  //   };

  //   this.router.navigate([page], navigationExtras);
  // }

  // gotoHomePage() {
  //   this.router.navigate([this.homeUrl]);
  // }

}

/*
There are two ways to make a service a singleton in Angular:
  - Set the providedIn property of the @Injectable() to "root".
  - Include the service in the AppModule or in a module that is only imported by the AppModule

Beginning with Angular 6.0, the preferred way to create a singleton service is to set providedIn to root on the service's @Injectable() decorator.
 This tells Angular to provide the service in the application root.
 @Injectable({
  providedIn: 'root'
})
*/
