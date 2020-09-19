/*El api client es como un servicio */

import { BehaviorSubject, from, Subject } from 'rxjs';
import { DestinoViaje} from './destino-viaje.model';

export class DestinosApiClient {
    destinos: DestinoViaje[];
    current: Subject<DestinoViaje> = new BehaviorSubject<DestinoViaje>(null); /*Aca publicamos nuevas versiones de cual es el destino favorito */


    constructor() {
        this.destinos=[];
    }

    add(d:DestinoViaje){
        this.destinos.push(d);
    }

    getAll() {
        return this.destinos;
    }

    getById(id: string): DestinoViaje {
        return this.destinos.filter(function(d) {return d.isSelected.toString()=== id; })[0];
    }

    elegir(d: DestinoViaje){ /*Este metodo lo que hace es setear al destino como elegido favorito */
        this.destinos.forEach(x => x.setSelected(false)); /* */
        d.setSelected(true);
        this.current.next(d); /*Con esto seteamos el proximo valor a este observable */
        /*Seteamos actualmente cual es el elegido */
    }

    subscribeOnChange(fn){
        this.current.subscribe(fn); /*Es es la manera de que el resto se subscriba a las actualizaciones */

    }
}