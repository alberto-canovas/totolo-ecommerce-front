import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  id: number;
  customerName: string;
  date: string;
  status: 'PENDING' | 'IN_PROCESS' | 'SENT' | 'CANCELLED';
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8080/totolo/v1/orders';

  constructor(private http: HttpClient) {}

  // Obtener todos los pedidos (para admin)
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/all`);
  }

  // Obtener pedidos del usuario (puedes mantener si quieres)
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  updateOrderStatus(id: number, status: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}/status?status=${status}`, {});
  }
}
