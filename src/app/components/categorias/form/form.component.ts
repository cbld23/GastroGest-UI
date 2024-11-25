import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoriaService } from '../../../services/categoria.service';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  categoria: Categoria = { nombre: '' };
  id: number | null = null;
  isEditMode: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.isEditMode = true;
      this.categoriaService.getCategoriaById(this.id).subscribe(
        data => {
          this.categoria = data;
        }
      );
    }
  }

  saveCategoria(): void {
    if (this.isEditMode && this.categoria.id !== undefined) {
      this.categoriaService.updateCategoria(this.categoria.id, this.categoria).subscribe(
        () => this.router.navigate(['/categorias'])
      );
    } else {
      this.categoriaService.createCategoria(this.categoria).subscribe(
        () => this.router.navigate(['/categorias']),
        error => console.error('Error creating category', error)
      );
    }
  }
}
