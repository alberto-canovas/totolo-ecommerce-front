import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule, RouterLink],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  constructor(private router: Router, private authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    const user = this.authService.getCurrentUser();
    return user ? user.name : '';
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
