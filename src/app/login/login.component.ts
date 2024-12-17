import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service.ts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: { token: string }) => { // Definir el tipo de la respuesta
        console.log('Login successful. Token:', response.token);
        this.authService.saveToken(response.token);
      },
      (error: any) => { // Puedes usar 'any' para errores si no tienes una estructura definida
        console.error('Login failed', error);
      }
    );
  }
  
}
