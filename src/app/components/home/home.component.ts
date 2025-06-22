import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from "../usuario/usuario.component";
import { CarritoComponent } from "../carrito/carrito.component";
import { ProductosListaComponent } from "../productos-lista/productos-lista.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductosListaComponent, CarritoComponent, UsuarioComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  userName: string | null = null;

  ngOnInit() {
    this.userName = localStorage.getItem('loggedUserName');
  }

}
