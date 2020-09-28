import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppState } from '../app.module';
import { DestinoViaje } from '../models/destino-viaje.model';/*Con esto importo el modelo de clase que creo */
import {DestinosApiClient} from './../models/destinos-api-client.model';
import {Store} from '@ngrx/store';
import { state } from '@angular/animations';
import { ElegidoFavoritoAction, NuevoDestinoAction } from '../models/destinos-viajes-state.model';


@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates : string[];
  
  constructor(private destinosApiClient:DestinosApiClient , private store: Store<AppState>) {
      this.onItemAdded = new EventEmitter();
      this.updates = [];
      this.store.select(state => state.destinos.favorito).subscribe( d => {
        if(d != null){
          this.updates.push('Se ha eledigo a ' + d.nombre);
        }
      });
      
   }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje) {
     this.destinosApiClient.add(d);/*Lo que hacemos es agregar el api client */
     this.onItemAdded.emit(d);/*Emitimos el evento hacia arriba componente padre */
     this.store.dispatch(new NuevoDestinoAction(d));
  }

  elegido(d: DestinoViaje) {
       this.destinosApiClient.elegir(d);/*De esta manera consumimos el api client para desatar el evento de elegido, es decir el api client se encarga de hacer esto */
       this.store.dispatch(new ElegidoFavoritoAction(d));

  }

}
 