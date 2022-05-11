import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../modelos/producto';
import { ProductosComponent } from '../componentes/productos/productos.component';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  selectedProd: Producto;
  productos: Producto[] = [];

  readonly URL = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) { 
    this.selectedProd = new Producto();
  }


  getProd(){
    return this.http.get(this.URL);
  }

  postProd(Producto: Producto)
  {
    return this.http.post(this.URL,Producto);
  }

  putProd(Producto: Producto)
  {
    return this.http.put(this.URL+'/${Producto._id}',Producto);
  }

  deleteProd(_id: string)
  {
    return this.http.delete(this.URL+`/${_id}`);
  }

}
