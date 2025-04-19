import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Producto } from '../modelo/producto';
import { ProductoService } from '../servicios/producto.service';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from "../componentes/compras/compras.component";
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterModule, IonIcon, IonButton, IonButtons, ComprasComponent, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent ],
  standalone: true
})
export class HomePage implements OnInit {
  // propiedad con arreglo vacío, entonces cuando se carga el  componente Home le decimos que ocupe el servicio
  // para recuperar los productos
  productos:Producto[] = []

  constructor(
    // inyección de servicio
    private productoService:ProductoService
  ) {
    // agrego el ícono usado en la plantilla
      addIcons({
        settingsOutline
      })
  }

  // recuperar los productos que estén en memoria
  ngOnInit(): void {
    this.productos = this.productoService.getProductos()
  }
}
 