import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  loginError: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  volverInicio() {
  this.router.navigate(['/']);
}

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (user) => {
        this.authService.setCurrentUser(user);
        this.loginError = null;
        this.router.navigate(['/']); // Ir a home
      },
      error: (err) => {
        this.loginError = err.error;
      }
    });
  }

  forgotPassword() {
    this.router.navigate(['/recuperar-password']);
  }
}
