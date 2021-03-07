import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noPuedeSerBroken(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'broken') {
      return {
        noBroken: true,
      };
    }
    // si regresa null todo esta bn no hay error
    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;
      // console.log({pass1, pass2})

      if (pass1 !== pass2) {
        control.get(campo2)?.setErrors({ noIguales: true });
        return {
          noIguales: true,
        };
      } else {
        // control.get(campo2)?.setErrors(null);
        control.get(campo2)?.setErrors(null)
        return null;
      }
      // if (pass1 === pass2) {
      //   return null
      // } else {
      //   return {
      //     noIguales: true
      //   }
      // }
    };
  }
}
