import { FormControl } from '@angular/forms';
// public nombreApellidoPattern: string = '([a-zA-Z]+ cualquier cantidad de caracteres adicionales) ()'
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerBroken = (control: FormControl) => {
  const valor: string = control.value?.trim().toLowerCase();
  if (valor === 'broken') {
    return {
      noBroken: true,
    };
  }
  // si regresa null todo esta bn no hay error
  return null;
};
