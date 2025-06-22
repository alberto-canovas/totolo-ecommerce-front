import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  // Datos del formulario
  paymentForm = {
    cardNumber: '',
    cardholderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
    address: ''
  };

  // Validación
  errors: any = {};
  isProcessing: boolean = false;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // Validación de tarjeta de crédito
  validateCardNumber(value: string): boolean {
    const cardNumber = value.replace(/\s/g, '');
    return /^\d{16}$/.test(cardNumber);
  }

  // Validación de CVC
  validateCVC(value: string): boolean {
    return /^\d{3,4}$/.test(value);
  }

  // Validación de fecha de expiración
  validateExpiryDate(month: string, year: string): boolean {
    if (!month || !year) return false;
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    
    const expiryYear = parseInt(year);
    const expiryMonth = parseInt(month);
    
    if (expiryYear < currentYear) return false;
    if (expiryYear === currentYear && expiryMonth < currentMonth) return false;
    
    return expiryMonth >= 1 && expiryMonth <= 12;
  }

  // Formatear número de tarjeta
  formatCardNumber(event: any) {
    let value = event.target.value.replace(/\s/g, '');
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    this.paymentForm.cardNumber = value;
  }

  // Validar formulario completo
  validateForm(): boolean {
    this.errors = {};

    // Validar número de tarjeta
    if (!this.validateCardNumber(this.paymentForm.cardNumber)) {
      this.errors.cardNumber = 'Número de tarjeta inválido (16 dígitos)';
    }

    // Validar nombre del titular
    if (!this.paymentForm.cardholderName.trim()) {
      this.errors.cardholderName = 'Nombre del titular es requerido';
    }

    // Validar fecha de expiración
    if (!this.validateExpiryDate(this.paymentForm.expiryMonth, this.paymentForm.expiryYear)) {
      this.errors.expiryDate = 'Fecha de expiración inválida';
    }

    // Validar CVC
    if (!this.validateCVC(this.paymentForm.cvc)) {
      this.errors.cvc = 'CVC inválido (3-4 dígitos)';
    }

    // Validar dirección
    if (!this.paymentForm.address.trim()) {
      this.errors.address = 'Dirección de entrega es requerida';
    }

    return Object.keys(this.errors).length === 0;
  }

  // Procesar pago
  async processPayment() {
    if (!this.validateForm()) {
      return;
    }

    if (this.cartItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    this.isProcessing = true;

    try {
      // Crear el pedido
      this.orderService.createOrder(this.paymentForm.address, this.cartItems).subscribe({
        next: (order) => {
          console.log('Pedido creado exitosamente:', order);
          
          // Limpiar carrito
          this.cartService.clearCart();
          
          // Mostrar mensaje de éxito
          alert('¡Pago procesado exitosamente! Tu pedido ha sido creado.');
          
          // Redirigir a la página principal
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error al crear el pedido:', err);
          
          // Mensaje de error más detallado
          const errorMessage = err.error?.message || err.message || 'Error desconocido';
          alert(`Error al procesar el pago: ${errorMessage}. Por favor, intenta nuevamente.`);
          
          this.isProcessing = false;
        }
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Error al procesar el pago. Por favor, intenta nuevamente.');
      this.isProcessing = false;
    }
  }

  // Volver al carrito
  goBack() {
    this.router.navigate(['/carrito']);
  }

  // Generar opciones de años para la fecha de expiración
  getYearOptions(): number[] {
    const currentYear = new Date().getFullYear();
    const years: number[] = [];
    for (let i = 0; i < 10; i++) {
      years.push(currentYear + i);
    }
    return years;
  }
}
