import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';/*Con esto importo el modelo de clase que creo */
import {DestinosApiClient} from './../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates : string[];
  
  constructor(public destinosApiClient:DestinosApiClient) {
      this.onItemAdded = new EventEmitter();
      this.updates = [];
      this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
        if(d!= null){
          this.updates.push('Se ha elegido a ' + d.nombre);
        }
      });
   }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje) {
     this.destinosApiClient.add(d);/*Lo que hacemos es agregar el api client */
     this.onItemAdded.emit(d);/*Emitimos el evento hacia arriba componente padre */

  }

  elegido(d: DestinoViaje) {
       this.destinosApiClient.elegir(d);/*De esta manera consumimos el api client para desatar el evento de elegido, es decir el api client se encarga de hacer esto */
       
  }

}
 