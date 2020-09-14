import { Component, OnInit } from '@angular/core';
import { PedidoComida } from './../models/pedido-comida.model';


@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
  pedidos : PedidoComida[];
  constructor() {
    this.pedidos = [];
   }

  ngOnInit(): void {
  }

  guardarPed(nombre:string, ingrediente:string):boolean {
    this.pedidos.push(new PedidoComida(nombre, ingrediente));  
    console.log(this.pedidos);   
    return false;

  }

}
