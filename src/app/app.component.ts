import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosListaComponent } from './components/productos-lista/productos-lista.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductosListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'totolo-front';
}
