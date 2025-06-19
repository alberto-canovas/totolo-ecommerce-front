import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recuperar-password.component.html',
  styleUrl: './recuperar-password.component.css'
})
export class RecuperarPasswordComponent {
  email: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    // Simulación: en producción, llamarías a un servicio real
    if (this.email === 'client@totolo.com') {
      this.successMessage = 'Te hemos enviado instrucciones para recuperar tu contraseña.';
      this.errorMessage = null;
    } else {
      this.errorMessage = 'No se ha encontrado ningún usuario con ese email.';
      this.successMessage = null;
    }
  }

  volverAlInicio() {
  this.router.navigate(['/']);
}
}
