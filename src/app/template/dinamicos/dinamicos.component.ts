import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favoritos[];
}

interface Favoritos {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss'],
})
export class DinamicosComponent implements OnInit {
  public person: Persona = {
    nombre: 'Adrian',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal gear',
      },
      {
        id: 2,
        nombre: 'Death Stranding',
      },
    ],
  };
  public nuevoJuego: string = '';

  constructor() {}

  ngOnInit(): void {}

  guardar() {}

  guardarJuego() {
    const juegoNuevo: Favoritos = {
      id: this.person.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.person.favoritos.push({ ...juegoNuevo });
    this.nuevoJuego = '';
  }

  borrar(i: number) {
    this.person.favoritos.splice(i, 1);
  }
}
