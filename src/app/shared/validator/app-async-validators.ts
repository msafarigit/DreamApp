import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '@shared/service/auth.service';

export class AppAsyncValidators {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  static EmailNotTakenValidator(authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => authService.checkEmail(control.value).pipe(map(res => res ? null : { emailTaken: true }));
  }
}

/*
Async Validation:
Just like synchronous validators have the ValidatorFn and Validator interfaces,
asynchronous validators have their own counterparts: AsyncValidatorFn and AsyncValidator.

They are very similar with the only difference being:
 1- They must return a Promise or an Observable,
 2- The observable returned must be finite, meaning it must complete at some point.
    To convert an infinite observable into a finite one, pipe the observable through a filtering operator such as first, last, take, or takeUntil.

After asynchronous validation begins, the form control enters a pending state.
 You can inspect the control's pending property and use it to give visual feedback about the ongoing validation.
*/
