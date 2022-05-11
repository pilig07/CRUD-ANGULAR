import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service'
import { FormsModule, NgForm } from '@angular/forms';
import { Producto } from 'src/app/modelos/producto';

declare var M: any; //utilizar toast para notificar

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  constructor(public ProductoService: ProductoService) { }

  ngOnInit(): void {
    this.getProd();
  }

  addProd(form: NgForm) {
    if (form.value._id) {
      this.ProductoService.putProd(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Actulizado con Éxito!' });
          this.getProd();
        });

    } else {
      this.ProductoService.postProd(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: 'Guardado Exitoso!' });
          this.getProd();
        });
    }
  }

  getProd() {
    this.ProductoService.getProd()
      .subscribe(res => {
        this.ProductoService.productos = res as Producto[];
        //console.log(res);
      });

  }

  editProd(producto: Producto) {
    this.ProductoService.selectedProd = producto;

  }

  deleteProd(_id: string) {
    if (confirm('¿Deseas eliminar este registro?')) {

      this.ProductoService.deleteProd(_id)
        .subscribe(res => {
          this.getProd();
        });
    }

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ProductoService.selectedProd = new Producto;
    }
  }

}