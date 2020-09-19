import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; /*Importamos el modulo para poder rootear los componentes que tenemos */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';/*Tenemos que importalo para poder usar el rooteo que se especifica mas abajo*/
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from './models/destinos-api-client.model';

const routes : Routes = [                             /*Definimos las rutas que vamos a utilizar en nuestra app */
  {path: '', redirectTo: 'home',pathMatch: 'full'}, /*Nos sirve que matchee cuando esta vacio */
  {path: 'home', component: ListaDestinosComponent}, /*El home nos permite que vaya a listaDestinosComponent */
  {path: 'destino', component: DestinoDetalleComponent},/*El path destino nos lleva hacia el Detalle del componente */
  
];
 
@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListaDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),/*Los tenemos que cargar asi registramos las rutas de los componentes, es decir son rutas registrada en el modulo */
    AppRoutingModule
  ],
  providers: [
    DestinosApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
