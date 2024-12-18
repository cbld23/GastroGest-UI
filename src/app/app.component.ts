import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service.ts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Catálogo de Productos';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.checkAuthentication();
  }
 /*
  constructor(private authService: AuthService, private router: Router) {
    // Escuchar cambios en el estado de autenticación
    this.authService.getAuthStatus().subscribe((status) => {
      this.isAuthenticated = status;
    });
  }*/

  checkAuthentication(): void {
    this.isAuthenticated = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']); // Redirige al login después de cerrar sesión
  }
  
}


