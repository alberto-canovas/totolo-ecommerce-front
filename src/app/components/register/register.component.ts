import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    name: '',
    lastname: '',
    username: '',
    email: '',
    address: '',
    phone_number: '',
    password: ''
  };

  registerError: string | null = null;
  registerSuccess: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  volverInicio() {
  this.router.navigate(['/']);
}

  onSubmit() {
  this.registerError = null;
  this.registerSuccess = null;

  this.authService.register(this.user).subscribe({
    next: (res: any) => {
      this.registerSuccess = res;
      setTimeout(() => this.router.navigate(['/login']), 1500);
    },
    error: (err) => {
      console.error('Error al registrar:', err);  // ← Diagnóstico

      if (err.status === 409 && typeof err.error === 'string') {
        this.registerError = err.error; // ← Mensaje del backend
      } else {
        this.registerError = 'Error al registrar. Inténtalo de nuevo.';
      }
    }
    });
  }
}