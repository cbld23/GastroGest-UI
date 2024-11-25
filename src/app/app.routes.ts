import { Routes } from '@angular/router';
import { ListComponent as CategoriaListComponent } from './components/categorias/list/list.component';
import { FormComponent as CategoriaFormComponent } from './components/categorias/form/form.component';
import { ListComponent as ProductoListComponent } from './components/productos/list/list.component';
import { FormComponent as ProductoFormComponent } from './components/productos/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'categorias', pathMatch: 'full' },
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'categorias/new', component: CategoriaFormComponent },
  { path: 'categorias/edit/:id', component: CategoriaFormComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/new', component: ProductoFormComponent },
  { path: 'productos/edit/:id', component: ProductoFormComponent }
];
