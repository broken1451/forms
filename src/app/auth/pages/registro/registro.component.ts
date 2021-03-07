import { Component, OnInit } from '@angular/core';
import {
  nombreApellidoPattern,
  emailPattern,
  noPuedeSerBroken,
} from '../../../shared/validators/validators';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  public form: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidatorService],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerBroken],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  get emailErrMsg(): string {
    const errors = this.form.get('email')?.errors;
    if (errors?.required) {
      return 'El email es obligatorio';
    } else if (errors?.pattern) {
      return 'El email no tiene el formato correcto';
    } else if (errors?.emailTomado) {
      return 'El email ya esta en uso';
    } else {
      return '';
    }
  }

  constructor(
    private fb: FormBuilder,
    private emailValidatorService: EmailValidatorService,
    private validatorService: ValidatorsService
  ) {}

  ngOnInit(): void {
    this.form.patchValue({
      nombre: 'Adrian B',
      email: 'test1@test.com',
      username: 'broken145',
      password: '123456',
      password2: '123456',
    });
  }

  campoNoEsValido(campo: string) {
    return (
      // this.form.controls[campo].invalid && this.form.controls[campo].touched
      this.form.get(campo)?.invalid && this.form.get(campo)?.touched
    );
  }

  emailRequiere() {
    return (
      this.form.get('email')?.errors?.required &&
      this.form.get('email')?.touched
    );
  }

  emailformat() {
    return (
      this.form.get('email')?.errors?.pattern && this.form.get('email')?.touched
    );
  }
  emailTomado() {
    return (
      this.form.get('email')?.errors?.emailTomado &&
      this.form.get('email')?.touched
    );
  }

  guardar() {
    console.log(this.form);
    this.form.markAllAsTouched();
  }
}
