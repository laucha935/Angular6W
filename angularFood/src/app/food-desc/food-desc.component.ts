import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { PedidoComida } from './../models/pedido-comida.model';


@Component({
  selector: 'app-food-desc',
  templateUrl: './food-desc.component.html',
  styleUrls: ['./food-desc.component.css']
})
export class FoodDescComponent implements OnInit {
  @Input() pedido: PedidoComida;
  @HostBinding('attr.class') cssCLass = 'col-md-4';
  
  constructor() { }

  ngOnInit(): void {
  }

}
