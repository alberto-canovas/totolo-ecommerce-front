import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TotoloService } from '../../service/totolo.service';
import { CartService, CartItem } from '../../service/cart.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule, CarritoComponent],
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto: any;
  productoId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private totoloService: TotoloService,
    private cartService: CartService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.productoId = this.route.snapshot.paramMap.get('id');
    if (this.productoId) {
      this.totoloService.getProducts$().subscribe(productos => {
        this.producto = productos.find((p: any) => p.id == this.productoId);
      });
    }
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

  volver(): void {
    this.location.back();
  }

  onImageError(event: any): void {
    event.target.src = '/images/goku.jpg';
  }
}
