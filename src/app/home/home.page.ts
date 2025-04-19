import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Producto } from '../modelo/producto';
import { ProductoService } from '../servicios/producto.service';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from "../componentes/compras/compras.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ComprasComponent, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent ],
  standalone: true
})
export class HomePage implements OnInit {
  // propiedad con arreglo vacío, entonces cuando se carga el  componente Home le decimos que ocupe el servicio
  // para recuperar los productos
  productos:Producto[] = []

  constructor(
    // inyección de servicio
    private productoService:ProductoService
  ) {}

  // recuperar los productos que estén en memoria
  ngOnInit(): void {
    this.productos = this.productoService.getProductos()
  }
}
 