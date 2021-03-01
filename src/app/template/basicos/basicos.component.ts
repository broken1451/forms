import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  public initForm = {
    producto: 'RTX40x',
    precio: 10,
    existencia: 10
  }

  get formulario() {
    return this.form.controls;
  }

  constructor() {}

  ngOnInit(): void {}

  // guardar(form: NgForm) {
  guardar() {
    if (this.formulario.precio.value < 0) {
      console.log(this.form);
      return;
    }
    this.form.resetForm({
      producto: 'Algo',
      precio: 0,
      existencia: 0
    });
  }

  nombreValido(): boolean {
    return (
      this.form?.controls['producto']?.invalid &&
      this.form?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.form?.controls['precio']?.value < 0 &&
      this.form?.controls['precio']?.touched
    );
  }
}
