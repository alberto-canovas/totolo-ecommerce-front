import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { OrderService, Order } from '../../service/order.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'order-list-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-list-admin.component.html',
  styleUrls: ['./order-list-admin.component.css']
})
export class OrderListAdminComponent {
  pedidos$: Observable<Order[]> = new Observable<Order[]>();
  errorMessage: string = '';

  constructor(
    private orderService: OrderService,
    private router: Router,
    private authService: AuthService
  ) {
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    if (!this.authService.isLoggedIn() || !this.authService.isAdmin()) {
      this.router.navigate(['/login']);
      return;
    }

    this.authService.checkSession().subscribe({
      next: () => this.loadOrders(),
      error: (err) => {
        console.error('Sesión inválida:', err);
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }

  private loadOrders(): void {
    this.pedidos$ = this.orderService.getAllOrders();
  }

  cambiarEstado(orderId: number, nuevoEstado: string): void {
    this.orderService.updateOrderStatus(orderId, nuevoEstado).subscribe({
      next: () => {
        alert(`Estado cambiado a ${nuevoEstado}`);
        // Recargar la lista de pedidos después de cambiar estado
        this.pedidos$ = this.orderService.getAllOrders();
      },
      error: (err) => {
        console.error('Error al cambiar estado:', err);
        alert('Error al cambiar estado: ' + (err.error?.message || err.message || 'Error desconocido'));
      }
    });
  }

  volverAlDashboard(): void {
    this.router.navigate(['/admin/dashboard']);
  }

  // Calcular el total de un pedido
  getOrderTotal(pedido: any): number {
    if (!pedido.orderItems || pedido.orderItems.length === 0) {
      return 0;
    }
    
    return pedido.orderItems.reduce((total: number, item: any) => {
      return total + (item.price * item.quantity);
    }, 0);
  }
}
