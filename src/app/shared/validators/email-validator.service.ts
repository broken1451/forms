import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap , delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private httpClient: HttpClient) {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    // {noigual: true} <= ValidationErrors
    // throw new Error('Method not implemented.');
    const email = control.value;
    console.log({ email });
    return this.httpClient
      .get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(3000),
        map((res) => {
          // if (res.length === 0) {
          //   return null;
          // } else {
          //   return { emailTomado: true };
          // }
          return res.length === 0 ? null : { emailTomado: true }
        })
      );
  }
}
