import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  public person = {
    genero: 'F',
    notificaciones: true
  }
  public terminos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
l