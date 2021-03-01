import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss'],
})
export class DinamicosComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        // this.fb.control('')
        ['Metal gear', Validators.required],
        ['Among Us', Validators.required],
      ],
      Validators.required
    ),
  });

  public nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.form.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.patchValue({
      nombre: 'Adrian',
    });
  }

  campoNoEsValido(campo: string) {
    return (
      this.form.controls[campo].errors && this.form.controls[campo].touched
    );
  }

  guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // marcar todas las validaciones
      return;
    }
    console.log(this.form.value);
  }

  agregarFav() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  borrar(i: number) {
    // eliminar un formcontrol
    this.favoritosArr.removeAt(i);
  }
}
