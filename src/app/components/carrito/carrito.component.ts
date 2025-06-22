import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartItem, CartService } from '../../service/cart.service';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {
  cart: CartItem[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
      this.total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    });
  }

  vaciarCarrito() {
    this.cartService.clearCart();
  }

  irAlCheckout() {
    if (this.cart.length > 0) {
      this.router.navigate(['/checkout']);
    } else {
      alert('El carrito está vacío');
    }
  }
}

// export class CarritoComponent {

//   cart: any[] = [];  // Tu array de productos en el carrito
//   total: number = 0;

//   stripePromise = loadStripe('pk_test_51RZ7PHINVtuUnxBwWq5Tq0dLuTNFC33MnCd3zKjRjFhRBZzkzqAeZ8XM4NWrGuix4uVnRbcaLmGuOSTSzO24j0nW00tSNdYjRW'); // Tu clave pública Stripe

//   constructor(private http: HttpClient) {
//     // Aquí deberías inicializar cart y total con los datos reales
//   }

//   async checkout() {
//     const stripe = await this.stripePromise;

//     // Aquí haces la llamada a tu backend para crear la sesión de Stripe.
//     // IMPORTANTE: Modifica la URL y el body según tu backend
//     this.http.post<any>('http://localhost:8080/totolo/v1/payment/checkout/1', {}) // Ejemplo usando userId=1
//       .subscribe(async (session) => {
//         const result = await stripe?.redirectToCheckout({
//           sessionId: session.id
//         });
//         if (result?.error) {
//           console.error(result.error.message);
//         }
//       }, err => {
//         console.error('Error al crear sesión de pago', err);
//       });
//   }

  


