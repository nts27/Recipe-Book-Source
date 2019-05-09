import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator, ValidatorFn} from "@angular/forms";
import {UserService} from "./user-service.service";

@Directive({
  selector: '[appAuthenticate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AuthenticateDirective,
      multi: true
    }
  ]
})
export class AuthenticateDirective implements Validator{

  validator: ValidatorFn;
  constructor(private userService: UserService) {
    this.validator = this.userValidator();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }

  userValidator(): ValidatorFn {
    return (c: FormControl) => {
      let isValid = this.userService.authenticateUser(c.value);
      if(isValid)
        return null;
      else return {
        userValidator: {
          valid: false
        }
      }
    }
  }

}
