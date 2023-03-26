import {FormControl, ValidationErrors} from "@angular/forms";

export class Luv2ShopValidators {

  static notOnlyWhiteSpace(control: FormControl): ValidationErrors {

   return ((control.value != null) && (control.value.trim().length === 0)) ? {'notOnlyWhiteSpace':true} : null

  }

}
