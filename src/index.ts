import { AsyncValidatorFn, ValidatorFn, Validators } from "@angular/forms";

import { ErrorMessage } from "./types";
import { createValidator } from "./utils";
import { callbackValidator } from "./validators/callback";
import { nameValidator } from "./validators/name";

export const min = (min: number, message?: ErrorMessage) =>
  createValidator(Validators.min(min), message);

export const max = (max: number, message?: ErrorMessage) =>
  createValidator(Validators.max(max), message);

export const required = (message?: ErrorMessage) =>
  createValidator(Validators.required.bind(this), message);

export const requiredTrue = (message?: ErrorMessage) =>
  createValidator(Validators.requiredTrue.bind(this), message);

export const email = (message?: ErrorMessage) =>
  createValidator(Validators.email.bind(this), message);

export const minLength = (minLength: number, message?: ErrorMessage) =>
  createValidator(Validators.minLength(minLength), message);

export const maxLength = (maxLength: number, message?: ErrorMessage) =>
  createValidator(Validators.maxLength(maxLength), message);

export const pattern = (pattern: string | RegExp, message?: ErrorMessage) =>
  createValidator(Validators.pattern(pattern), message);

export const nullValidator = (message?: ErrorMessage) =>
  createValidator(Validators.nullValidator.bind(this), message);

export const compose = (
  validators: (ValidatorFn | null | undefined)[],
  message?: ErrorMessage
) => createValidator(Validators.compose(validators)!, message);

export const composeAsync = (
  validators: (AsyncValidatorFn | null)[],
  message?: ErrorMessage
) => createValidator(Validators.composeAsync(validators)!, message);

export const name = (message?: ErrorMessage) =>
  createValidator(nameValidator, message);

/**
 * Validator that requires the control's value to satisfy a callback function.
 *
 * @param condition A function that returns true if the value is invalid.
 * @param message The error message to return if the validation fails.
 *
 * @example
 * ```ts
 * const control = new FormControl(10, [
 *   t.callback(value => value < 42, 'Value must be at least 42')
 * ]);
 * ```
 */
export const callback = (
  condition: (value: any) => boolean,
  message?: ErrorMessage
) => createValidator(callbackValidator(condition), message);
