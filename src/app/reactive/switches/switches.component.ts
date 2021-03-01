import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  public person = {
    genero: 'F',
    notificaciones: true,
  };

  public form: FormGroup = this.fb.group({
    genero: ['M', [Validators.required]],
    notificaciones: [true, [Validators.required]],
    terminos: [false, [Validators.requiredTrue]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.form.reset({...this.person})
    // this.form.setValue({...this.person})
    this.form.patchValue({ ...this.person, terminos: true });
  }

  guardar(){
    // this.form.value
  }
}
