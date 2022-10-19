import { Component, OnInit } from '@angular/core';
import {TrabajosService} from "../../servicios/trabajos.service";
import {Tabla} from "../../modelo/tabla";

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {
  tabla: Tabla | undefined;

  //OnInit lugar seguro para recuperar los datos dentro del componente
  constructor(private trabajosService: TrabajosService) { }

  ngOnInit(): void {
    this.trabajosService.obtenerTrabajos().subscribe(
      data => this.tabla = data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }

}
