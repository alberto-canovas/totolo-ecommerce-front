import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },        
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent},
  { path: 'recuperar-password', component:RecuperarPasswordComponent},
  { path: 'detalle-producto/:id', component: DetalleProductoComponent },
  { path: '**', redirectTo: '' }                  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }