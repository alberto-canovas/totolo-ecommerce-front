import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/totolo/v1';
  private currentUser: any = null;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/register`, user, {
      responseType: 'text'
    });
  }

  login(credentials: any): Observable<any> {
    // Crear las credenciales en formato base64 para HTTP Basic Auth
    const authHeader = 'Basic ' + btoa(credentials.username + ':' + credentials.password);
    
    return this.http.post(`${this.baseUrl}/login`, credentials, { 
      headers: new HttpHeaders({
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      }),
      withCredentials: true 
    }).pipe(
      tap(user => this.setCurrentUser(user, credentials))
    );
  }

  setCurrentUser(user: any, credentials?: any) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Guardar las credenciales para futuras peticiones
    if (credentials) {
      const authData = btoa(credentials.username + ':' + credentials.password);
      localStorage.setItem('authToken', authData);
    }
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
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser() && !!localStorage.getItem('authToken');
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.type === 'ADMIN';
  }

  checkSession(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders`, { withCredentials: true });
  }
}
