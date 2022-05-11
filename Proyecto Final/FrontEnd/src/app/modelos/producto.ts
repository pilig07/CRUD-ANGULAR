export class Producto {

    constructor(_id='',nombre='',marca='', cantidad = 0, precio = 0){
        this._id= _id;
        this.nombre = nombre;
        this.marca = marca;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    _id: string;
    nombre: string;
    marca: string;
    cantidad: number;
    precio: number;

}
