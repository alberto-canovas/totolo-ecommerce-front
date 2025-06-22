import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductService, Product } from '../../service/product.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'product-list-admin',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.css'],
})
export class ProductListAdminComponent {
  productos$: Observable<Product[]>;

  constructor(private productService: ProductService, private router: Router) {
    this.productos$ = this.productService.getProducts();
  }

  editarProducto(product: Product): void {
    // Redirige a una página de edición (que deberás implementar)
    this.router.navigate(['/admin/product-edit', product.id]);
  }

  borrarProducto(productId: number): void {
    if (confirm('¿Seguro que quieres borrar este producto?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          alert('Producto borrado');
          // Recargar la lista
          this.productos$ = this.productService.getProducts();
        },
        error: (err) => {
          alert('Error al borrar producto: ' + err.message);
        },
      });
    }
  }

  nuevoProducto(): void {
    // Redirige a una página para crear producto nuevo (que deberás implementar)
    this.router.navigate(['/admin/product-create']);
  }
}
