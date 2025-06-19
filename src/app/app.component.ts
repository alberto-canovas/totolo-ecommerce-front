import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosListaComponent } from './components/productos-lista/productos-lista.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarritoComponent } from "./components/carrito/carrito.component";
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductosListaComponent, FooterComponent, CarritoComponent, UsuarioComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'totolo-front';
}
