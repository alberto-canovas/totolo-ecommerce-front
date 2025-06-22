import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/totolo/v1';
  private currentUser: any = null; // Aquí guardas el usuario logueado

  constructor(private http: HttpClient) {}

  register(user: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/register`, user, {
      responseType: 'text'
    });
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials, { withCredentials: true }).pipe(
      tap(user => this.setCurrentUser(user))
    );
  }

  setCurrentUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user)); // persiste
  }

  getCurrentUser() {
    if (!this.currentUser) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    }
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.type === 'ADMIN';
  }

  // Verificar si la sesión sigue activa en el backend
  checkSession(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders`, { withCredentials: true });
  }
}
