import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';/*Con esto importo el modelo de clase que creo */

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos : string[];
  constructor() {
    this.destinos = [];
   }

  ngOnInit(): void {
  }

  guardar(nombre:string, url:string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url));
    console.log(this.destinos);
    return false;/*Retorno false para no recargar elformulario */
  }

}