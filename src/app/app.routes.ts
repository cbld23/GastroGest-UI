import { Routes } from '@angular/router';
import { ListComponent as CategoriaListComponent } from './components/categorias/list/list.component';
import { FormComponent as CategoriaFormComponent } from './components/categorias/form/form.component';
import { ListComponent as ProductoListComponent } from './components/productos/list/list.component';
import { FormComponent as ProductoFormComponent } from './components/productos/form/form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, // Sin guard
  { 
    path: 'categorias', 
    component: CategoriaListComponent, 
    canActivate: [AuthGuard] // Protegida
  },
  { 
    path: 'categorias/new', 
    component: CategoriaFormComponent, 
    canActivate: [AuthGuard] // Protegida
  },
  { 
    path: 'categorias/edit/:id', 
    component: CategoriaFormComponent, 
    canActivate: [AuthGuard] // Protegida
  },
  { 
    path: 'productos', 
    component: ProductoListComponent, 
    canActivate: [AuthGuard] // Protegida
  },
  { 
    path: 'productos/new', 
    component: ProductoFormComponent, 
    canActivate: [AuthGuard] // Protegida
  },
  { 
    path: 'productos/edit/:id', 
    component: ProductoFormComponent, 
    canActivate: [AuthGuard] // Protegida
  },
  { path: '**', redirectTo: 'login' } // Redirección a login para rutas no existentes
];
