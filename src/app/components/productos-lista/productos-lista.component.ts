// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Observable } from 'rxjs';
// import { TotoloService } from '../../service/totolo.service';

// @Component({
//   selector: 'productos-lista',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './productos-lista.component.html',
//   styleUrls: ['./productos-lista.component.css']
// })
// export class ProductosListaComponent {
//   productos$: Observable<any>;

//   constructor(private totoloService: TotoloService) {
//     this.productos$ = this.totoloService.getProducts$();
//   }
// }



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TotoloService } from '../../service/totolo.service';
import { CartService, CartItem } from '../../service/cart.service';  // Ajusta la ruta
import { RouterModule } from '@angular/router';

@Component({
  selector: 'productos-lista',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent {
  productos$: Observable<any>;

  constructor(private totoloService: TotoloService, private cartService: CartService) {
    this.productos$ = this.totoloService.getProducts$();
  }

  agregarAlCarrito(producto: any) {
    const item: CartItem = {
      productId: producto.id,
      name: producto.name,
      price: producto.price, 
      quantity: 1
    };
    this.cartService.addToCart(item);
    // alert(`Se añadió ${producto.name} al carrito`);
  }
}


