import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  loginError: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  volverInicio(): void {
    this.router.navigate(['/']);
  }

  forgotPassword(): void {
    this.router.navigate(['/recuperar-password']);
  }

  onSubmit(): void {
    console.log('Intentando login con:', this.credentials);
    
    this.authService.login(this.credentials).subscribe({
      next: (user) => {
        console.log('Login exitoso, usuario recibido:', user);
        this.authService.setCurrentUser(user);
        this.loginError = null;

        console.log('Usuario guardado, tipo:', user.type);
        console.log('Usuario actual después del login:', this.authService.getCurrentUser());

        if (user.type === 'ADMIN') {
          console.log('Redirigiendo a dashboard de admin');
          this.router.navigate(['/admin/dashboard']);
        } else {
          console.log('Redirigiendo a inicio');
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.loginError = err.error || 'Error al iniciar sesión';
      }
    });
  }
}
