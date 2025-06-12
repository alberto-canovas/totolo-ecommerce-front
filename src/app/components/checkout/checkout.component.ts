import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  template: `<button (click)="checkout()">Comprar</button>`
})
export class CheckoutComponent {
  stripePromise = loadStripe('pk_test_51RZ7PHINVtuUnxBwWq5Tq0dLuTNFC33MnCd3zKjRjFhRBZzkzqAeZ8XM4NWrGuix4uVnRbcaLmGuOSTSzO24j0nW00tSNdYjRW'); // Clave pública

  constructor(private http: HttpClient) {}

  async checkout() {
    const stripe = await this.stripePromise;

    this.http.post<any>('http://localhost:8080/api/payment/create-checkout-session', {
      name: 'Producto 3D',
      price: 25.99 // € euros
    }).subscribe(async (session) => {
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id
      });
      if (result?.error) {
        console.error(result.error.message);
      }
    });
  }
}
