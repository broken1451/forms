import { Component, OnInit } from '@angular/core';

interface MenuItem{
  texto: string;
  ruta:string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  public templateMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: '/template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: '/template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: '/template/switches'
    },
  ]

  public reactiveMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: '/reactive/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: '/reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: '/reactive/switches'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
