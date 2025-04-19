import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _productos:Producto[] = [
    new Producto("Pan", false),
    new Producto("Leche", false),
    new Producto("Mantequilla", false),
  ]

  constructor() { }

  // métodos
  // agregarProducto
  agregarProducto(p:Producto) {
    this._productos.push(p)
  }

  // verTodos
  getProductos():Producto[] {
    return this._productos
  }

  // eliminarProducto

  // editarProducto

  
}
