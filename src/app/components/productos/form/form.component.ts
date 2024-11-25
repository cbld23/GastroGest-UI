import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../../services/producto.service';
import { CategoriaService } from '../../../services/categoria.service';
import { Producto } from '../../../models/producto';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  producto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    stock: 0,
    categoria: { id: 0, nombre: '' },
  };
  categorias: Categoria[] = [];
  isEditMode: boolean = false;

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.isEditMode = true;
      this.productoService.getProductoById(id).subscribe((data) => {
        this.producto = data;
      });
    }
    this.loadCategorias();
  }

  loadCategorias(): void {
    this.categoriaService.getAllCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  saveProducto(): void {
    if (this.isEditMode) {
      this.productoService.updateProducto(this.producto.id, this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    } else {
      this.productoService.createProducto(this.producto).subscribe(() => {
        this.router.navigate(['/productos']);
      });
    }
  }
}
