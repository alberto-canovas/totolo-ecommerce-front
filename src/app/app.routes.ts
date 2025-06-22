import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ProductListAdminComponent } from './components/product-list-admin/product-list-admin.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },        
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'detalle-producto/:id', component: DetalleProductoComponent },
  { path: 'admin/products', component: ProductListAdminComponent },
  { path: 'admin/product-create', component: ProductCreateComponent },
  { path: 'admin/product-edit/:id', component: ProductEditComponent },
  { path: 'admin/dashboard', loadComponent: () => import('./components/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent) },
  { path: 'admin/order-list', loadComponent: () => import('./components/order-list-admin/order-list-admin.component').then(m => m.OrderListAdminComponent) },

  { path: '**', redirectTo: '' }                  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
