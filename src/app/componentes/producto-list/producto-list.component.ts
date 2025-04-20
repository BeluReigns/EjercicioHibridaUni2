import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { IonItem, IonList, IonLabel, IonCheckbox } from "@ionic/angular/standalone";

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss'],
  standalone: true,
  imports: [IonCheckbox, IonLabel, IonList, IonItem, CommonModule]
})
export class ProductoListComponent  implements OnInit {

  // usamos el input para recibir los datos del padre
  // es como un atributo, entonces por productos puedo recibir un arreglo Producto[]
  @Input() productos:Producto[] = []

  constructor() { }

  ngOnInit() {}

}
