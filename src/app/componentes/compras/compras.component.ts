import { Component, OnInit } from '@angular/core';
import { ProductoFormComponent } from "../producto-form/producto-form.component";
import { ProductoListComponent } from '../producto-list/producto-list.component';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
  standalone: true,
  imports: [ProductoFormComponent, ProductoListComponent],
})
export class ComprasComponent implements OnInit {
  // listaPadre
  listaProductos:Producto[] = []
  
  // Inyección del servicio
  constructor(
    private productoService:ProductoService
  ) {}

  // al inicio de ciclo de vida recupero la lista con el servicio y guardándolos en listaProductos
  ngOnInit() {
    this.listaProductos = this.productoService.getProductos()
  }

}
