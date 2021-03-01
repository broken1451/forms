import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

// selector: '[customMin][ngmodel-asociado a un ngmodel]'
// solo se puede usar esta directiva si se usa con el nombre customMin y tiene un ngmodel
// @Directive({
//     selector: '[customMin][ngModel]'
//     dependencias-providers
// })
@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minimo!: number;

  constructor() {
    console.log('directiva =======>', this.minimo);
  }

  validate(control: FormControl) {
    const inputValue = control.value;
    // console.log({ inputValue, minimo: this.minimo });
    if (inputValue < this.minimo) {
      return { customMin: true };
    } else if (inputValue === '') {
      return { customMin: true };
    } else {
      return null;
    }
  }
}
