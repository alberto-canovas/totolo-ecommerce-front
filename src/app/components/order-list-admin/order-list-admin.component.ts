import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { OrderService, Order } from '../../service/order.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'order-list-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-list-admin.component.html',
  styleUrls: ['./order-list-admin.component.css']
})
export class OrderListAdminComponent {
  pedidos$: Observable<Order[]>;

  constructor(private orderService: OrderService) {
    // Aquí llamamos al nuevo método que obtiene todos los pedidos (solo admins)
    this.pedidos$ = this.orderService.getAllOrders();
  }

  cambiarEstado(orderId: number, nuevoEstado: string): void {
    this.orderService.updateOrderStatus(orderId, nuevoEstado).subscribe({
      next: () => {
        alert(`Estado cambiado a ${nuevoEstado}`);
        // Volver a cargar todos los pedidos tras actualizar estado
        this.pedidos$ = this.orderService.getAllOrders();
      },
      error: (err) => {
        alert('Error al cambiar estado: ' + err.message);
      }
    });
  }
}
