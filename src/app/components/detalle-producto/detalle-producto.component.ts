import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TotoloService } from '../../service/totolo.service';
import { CartService, CartItem } from '../../service/cart.service';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto: any;
  productoId: string | null = null;

  cart: CartItem[] = [];
  total = 0;

  constructor(
    private route: ActivatedRoute,
    private totoloService: TotoloService,
    private cartService: CartService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Obtener ID del producto desde la URL
    this.productoId = this.route.snapshot.paramMap.get('id');

    // Cargar producto
    if (this.productoId) {
      this.totoloService.getProducts$().subscribe(productos => {
        this.producto = productos.find((p: any) => p.id == this.productoId);
      });
    }

    // Suscribirse al carrito
    this.cartService.cart$.subscribe(items => {
      this.cart = items;
      this.total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    });
  }

  agregarAlCarrito(): void {
    if (!this.producto) return;

    const item: CartItem = {
      productId: this.producto.id,
      name: this.producto.name,
      price: this.producto.price,
      quantity: 1
    };

    this.cartService.addToCart(item);
  }

  vaciarCarrito(): void {
    this.cartService.clearCart();
  }

  volver(): void {
    this.location.back();
  }
}
