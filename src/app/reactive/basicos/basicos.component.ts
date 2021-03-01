import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  // public form: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080'),
  //   precio: new FormControl(1500),
  //   existencia: new FormControl(10),
  // });

  public form: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencia: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // unicamente cuando queramos establecer valores al formulario
    this.form.setValue({
      nombre: 'RTX 4080',
      precio: 1500,
      existencia: 20
    })

    this.form.reset({
      nombre: 'RTX 4080',
      precio: 1500
    })
  }

  campoNoEsValido(campo: string){
    return this.form.controls[campo].errors && this.form.controls[campo].touched
  }

  guardar(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();// marcar todas las validaciones 
      return
    }
    console.log(this.form.value)
    this.form.reset()
  }
}
