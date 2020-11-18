import { FormControl, ValidationErrors } from '@angular/forms';
import { timer, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AuthService } from '@shared/service/auth.service';

export const loginAsyncValidator = (authService: AuthService, time: number = 500) => (input: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => timer(time).pipe(
      switchMap(() => authService.checkLogin(input.value)),
      map(res => res.isLoginAvailable ? null : { loginExist: true })
    );
