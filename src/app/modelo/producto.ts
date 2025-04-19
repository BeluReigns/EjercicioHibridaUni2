// export para que pueda ser usada desde cualquier lugar
// en vez de declarar sus propiedades, puedo declararlas como parámetros en el constructor, para usarlas
// desde otro componente usar public. Además así no tengo que declarar las propiedades de nuevo.

export class Producto {
    constructor( 
        public nombre:string = "",
        public comprado:boolean = false
    ) {}
}
