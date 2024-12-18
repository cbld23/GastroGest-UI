import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from '../../../models/categoria';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoriaService.getAllCategorias().subscribe(
      data => (this.categorias = data)
    );
  }

  goToNewCategory(): void {
    this.router.navigate(['/categorias/new']);
  }

  editCategoria(id: number): void {
    this.router.navigate(['/categorias/edit', id]);
  }

  deleteCategoria(id: number): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoriaService.deleteCategoria(id).subscribe(
          () => this.categorias = this.categorias.filter(c => c.id !== id)
      );
    }
  }
}
