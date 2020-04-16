import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
