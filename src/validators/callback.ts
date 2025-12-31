import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const callbackValidator = (
  condition: (value: any) => boolean
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return condition(control.value) ? { callback: true } : null;
  };
};
