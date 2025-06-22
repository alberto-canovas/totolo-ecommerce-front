import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService, Product } from '../../service/product.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'product-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  loading = false;
  error: string | null = null;

  constructor(private productService: ProductService, private router: Router) {}

  crearProducto() {
    if (this.form.invalid) {
      this.error = 'Por favor, rellena todos los campos obligatorios correctamente.';
      return;
    }
    this.error = null;
    this.loading = true;

    // La id se genera automáticamente en backend
    const nuevoProducto: Omit<Product, 'id'> = {
      name: this.form.value.name!,
      description: this.form.value.description || '',
      image: this.form.value.image || '',
      price: this.form.value.price!,
      stock: this.form.value.stock!,
    };

    this.productService.createProduct(nuevoProducto).subscribe({
      next: () => {
        this.loading = false;
        alert('Producto creado correctamente');
        this.router.navigate(['/admin/product-list']);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Error al crear producto: ' + err.message;
      },
    });
  }

  cancelar() {
    this.router.navigate(['/admin/product-list']);
  }
}
