
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080/totolo/v1/payment';

  constructor(private http: HttpClient) { }

  createCheckoutSession(productId: number) {
    return this.http.post<{ id: string }>(`${this.baseUrl}/create-checkout-session/${productId}`, {});
  }
}


