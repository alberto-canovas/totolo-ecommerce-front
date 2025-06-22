import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './cart.service';

export interface Order {
  id: number;
  customerName: string;
  date: string;
  status:  'IN_PROCESS' | 'SENT' | 'CANCELLED';
  orderItems?: OrderItem[];
  address?: string;
}

export interface OrderItem {
  id: number;
  productName: string;
  quantity: number;
  price: number;
  product?: {
    id: number;
    name: string;
    price: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8080/totolo/v1/orders';

  constructor(private http: HttpClient) {}

  // Obtener todos los pedidos (para admin)
  // getAllOrders(): Observable<Order[]> {
  //   return this.http.get<Order[]>(`${this.baseUrl}/all`);
  // }
getAllOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(`${this.baseUrl}/all`, {
    withCredentials: true
  });
}

  // Obtener pedidos del usuario (puedes mantener si quieres)
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl, {
      withCredentials: true
    });
  }

  updateOrderStatus(id: number, status: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}/status?status=${status}`, {}, {
      withCredentials: true
    });
  }

  // Crear un nuevo pedido
  createOrder(address: string, items: CartItem[]): Observable<Order> {
    const orderPayload = {
      address: address,
      items: items.map(item => ({
        productId: item.productId,
        quantity: item.quantity
      }))
    };
    return this.http.post<Order>(this.baseUrl, orderPayload, {
      withCredentials: true
    });
  }
}
