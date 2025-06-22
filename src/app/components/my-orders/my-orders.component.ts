import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Order, OrderService } from '../../service/order.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  errorMessage: string = '';

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {
    this.orders$ = new Observable<Order[]>();
  }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    this.loadOrders();
  }

  loadOrders(): void {
    this.orders$ = this.orderService.getOrders();
    this.orders$.subscribe({
      error: (err) => {
        this.errorMessage = 'Error al cargar los pedidos. Por favor, intenta nuevamente.';
        console.error('Error fetching orders:', err);
      }
    });
  }

  getOrderTotal(order: any): number {
    if (!order.orderItems || order.orderItems.length === 0) {
      return 0;
    }
    return order.orderItems.reduce((total: number, item: any) => total + (item.price * item.quantity), 0);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
} 