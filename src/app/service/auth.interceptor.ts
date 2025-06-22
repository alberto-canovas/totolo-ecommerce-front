import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Excluir endpoints de login y register de la autenticación automática
    if (request.url.includes('/login') || request.url.includes('/register')) {
      return next.handle(request);
    }

    // Obtener las credenciales del localStorage
    const authToken = localStorage.getItem('authToken');

    // Si las credenciales existen, clonar la petición y añadir la cabecera de autorización
    if (authToken) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Basic ${authToken}`),
        withCredentials: true
      });
      return next.handle(cloned);
    }

    // Si no hay credenciales, dejar pasar la petición original
    return next.handle(request);
  }
}
