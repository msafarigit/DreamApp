import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const passwordCheckValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) { return null; }

  return password.value === confirmPassword.value ? null : { passwordCheck: true };
};
