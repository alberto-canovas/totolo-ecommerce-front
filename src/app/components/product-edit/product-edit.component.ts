import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService, Product } from '../../service/product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'product-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  loading = false;
  error: string | null = null;
  productId!: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          if (!id) {
            this.error = 'ID de producto no válido';
            this.loading = false;
            return of(null);
          }
          this.productId = +id;
          return this.productService.getProductById(this.productId);
        })
      )
      .subscribe({
        next: (product) => {
          if (!product) {
            this.error = 'Producto no encontrado';
          } else {
            this.form.patchValue({
              name: product.name,
              description: product.description,
              image: product.image,
              price: product.price,
              stock: product.stock,
            });
          }
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Error al cargar producto: ' + err.message;
          this.loading = false;
        },
      });
  }

  guardarCambios() {
    if (this.form.invalid) {
      this.error = 'Por favor, rellena todos los campos obligatorios correctamente.';
      return;
    }
    this.error = null;
    this.loading = true;

    const productoEditado: Product = {
      id: this.productId,
      name: this.form.value.name!,
      description: this.form.value.description || '',
      image: this.form.value.image || '',
      price: this.form.value.price!,
      stock: this.form.value.stock!,
    };

    this.productService.updateProduct(productoEditado).subscribe({
      next: () => {
        this.loading = false;
        alert('Producto actualizado correctamente');
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Error al actualizar producto: ' + err.message;
      },
    });
  }

  cancelar() {
    this.router.navigate(['/admin/products']);
  }
}
